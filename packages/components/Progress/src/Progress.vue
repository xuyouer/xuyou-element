<script setup lang="ts">
import {createNamespace, getWaveColor, WaveUtils} from "@xuyou-element/utils";
import type {ProgressProps} from "./types";
import {computed, type CSSProperties, onMounted, onUnmounted, ref, watch} from "vue";

defineOptions({
  name: "xyProgress",
})
const bem = createNamespace("progress")
const props = withDefaults(defineProps<ProgressProps>(), {
  status: "default",
  type: "line",
  percent: 0,
  processing: false,
  // indicatorTextColor: "",
  showIndicator: true,
  // strokeColor: "",
  trailColor: "#f4f8fa",
  lineWidth: 200,
  lineHeight: 15,
  lineIndicatorPlacement: "inside",
  lineStrokeBorderRadius: 6,
  lineTrailBorderRadius: 6,
  strokeWidth: 6,
  trailWidth: 5,
  circleSize: 100,
  circleOffsetDegree: 90,
  dashboardOffset: -105,
  dashboardOffsetDegree: 75,
})
const slots = defineSlots()
// const hasContent = computed(() => !!slots?.default?.().length)
const progressStyles = computed(() => {
  if (!percentStyle.value) return {}
  return {
    ...(percentStyle.value ?? {}),
  }
})
const actualPercent = ref(0)
const canvas = ref<HTMLCanvasElement | null>(null)
let waveUtils: WaveUtils | null = null
const initWaveUtils = () => {
  if (props?.type === 'wave') {
    if (!canvas.value) {
      return
    }
    const ctx = canvas.value.getContext('2d')
    if (!ctx) {
      return
    }
    const waveColor = getWaveColor(
      ctx,
      props?.strokeColor,
      props?.status,
      props?.circleSize,
    )
    waveUtils = new WaveUtils(
      ctx,
      props?.circleSize,
      waveColor,
      props?.trailColor || '#f4f8fa',
      actualPercent.value,
    )
    waveUtils.startAnimation()
  }
}
const destroyWaveUtils = () => {
  if (waveUtils) {
    waveUtils.stopAnimation()
    waveUtils = null
  }
}
onMounted(() => {
  initWaveUtils()
})
onUnmounted(() => {
  destroyWaveUtils()
})
watch(() => props?.percent, (newPercent) => {
  actualPercent.value = Math.max(0, Math.min(100, Number(newPercent) || 0))
  if (props?.type === 'wave' && waveUtils) {
    waveUtils.updateProgress(newPercent)
  }
}, {deep: true, immediate: true})
watch(() => props?.type, (newType, oldType) => {
  if (newType === 'wave') {
    initWaveUtils()
  } else if (oldType === 'wave') {
    destroyWaveUtils()
  }
}, {deep: true, immediate: true})
const percentStyle = computed(() => {
  if (!actualPercent.value) return {}
  return {
    ...(actualPercent.value ? {
      "--xy-progress-percent": `${actualPercent.value}%`,
    } : {}),
  }
})
const lineTrailStyles = computed<CSSProperties>(() => {
  const borderRadius = typeof props?.lineTrailBorderRadius === 'number' ? `${Math.max(0, props?.lineTrailBorderRadius)}px` : props?.lineTrailBorderRadius
  return {
    width: props?.type === "line" ? `${Math.max(0, props?.lineWidth) || props?.lineWidth}px` : undefined,
    height: props?.type === "line" ? `${Math.max(0, props?.lineHeight) || props?.lineHeight}px` : undefined,
    borderRadius: props?.type === "line" ? borderRadius : undefined,
    backgroundColor: props?.trailColor,
    ...(props?.trailStyle ?? {}),
  }
})
const lineStrokeStyles = computed<CSSProperties>(() => {
  const borderRadius = typeof props?.lineStrokeBorderRadius === 'number' ? `${Math.max(0, props?.lineStrokeBorderRadius)}px` : props?.lineStrokeBorderRadius
  return {
    width: props?.type === "line" ? `${actualPercent.value}%` : undefined,
    height: props?.type === "line" ? `${Math.max(0, props?.lineHeight) || props?.lineHeight}px` : undefined,
    borderRadius: props?.type === "line" ? borderRadius : undefined,
    backgroundColor: typeof props?.strokeColor === "string" ? props?.strokeColor : undefined,
    backgroundImage: typeof props?.strokeColor === "object" ? `linear-gradient(to right, ${props?.strokeColor.stops.join(",")})` : undefined,
    ...(props?.strokeStyle ?? {}),
  }
})
const circleStyles = computed(() => {
  const radius = props?.circleSize / 2 - props?.strokeWidth / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference * (1 - actualPercent.value / 100)

  const isGradient = props?.strokeColor && typeof props.strokeColor === "object" && "stops" in props.strokeColor
  const gradientId = isGradient ? `gradient-${Math.random().toString(36).substring(2, 9)}` : undefined
  const strokeColorValue = typeof props?.strokeColor === "string"
    ? props.strokeColor
    : isGradient
      ? `url(#${gradientId})`
      : `var(--xy-${props?.status}-color, #6c757d)`

  const isDashboard = props?.type === "dashboard"
  const dashboardGapDegree = isDashboard ? props?.dashboardOffsetDegree : 0
  const dashboardStartAngle = isDashboard ? props?.dashboardOffset : 0
  const effectiveCircumference = circumference * (1 - dashboardGapDegree / 360)
  const effectiveOffset = effectiveCircumference * (actualPercent.value / 100)

  return {
    circle: {
      style: {
        ...(props?.circleOffsetDegree && !isDashboard ? {
          transform: `rotate(${props?.circleOffsetDegree}deg)`,
        } : {}),
      },
    },
    trail: {
      cx: props?.circleSize / 2,
      cy: props?.circleSize / 2,
      r: radius,
      fill: "none",
      stroke: props?.trailColor,
      "stroke-width": props?.trailWidth,
      "stroke-dasharray": isDashboard ? `${effectiveCircumference} ${circumference - effectiveCircumference}` : undefined,
      "stroke-dashoffset": isDashboard ? dashboardStartAngle : undefined,
      style: {...(props?.trailStyle ?? {})},
    },
    stroke: {
      cx: props?.circleSize / 2,
      cy: props?.circleSize / 2,
      r: radius,
      fill: "none",
      stroke: strokeColorValue,
      "stroke-width": props?.strokeWidth,
      // "stroke-dasharray": isDashboard ? `${effectiveCircumference} ${circumference - effectiveCircumference}` : circumference,
      // "stroke-dashoffset": isDashboard ? effectiveOffset + dashboardStartAngle : offset,
      "stroke-dasharray": isDashboard ? `${effectiveOffset}, ${circumference - effectiveOffset}` : circumference,
      "stroke-dashoffset": isDashboard ? dashboardStartAngle : offset,
      style: {...(props?.strokeStyle ?? {})},
    },
    gradient: isGradient
      ? {
        id: gradientId,
        stops: (props.strokeColor as { stops: [string, string] }).stops.map((stop, index) => ({
          offset: `${index * 100}%`,
          "stop-color": stop,
        })),
      }
      : null,
  }
})
const indicatorStyles = computed<CSSProperties>(() => {
  if (!props?.indicatorTextColor && !props?.strokeWidth && !props?.indicatorStyle) return {}
  return {
    ...(props?.indicatorTextColor ? {
      color: props?.indicatorTextColor,
    } : {}),
    ...(props?.strokeWidth && props?.type !== "line" ? {
      inset: `${props?.strokeWidth}px`,
    } : {}),
    ...(props?.indicatorStyle ?? {}),
  }
})
</script>

<template>
  <div :class="[bem.b(), bem.m(type)]" :style="progressStyles">
    <div v-if="type === 'line'" :class="[bem.e('trail'), ...(trailClass ?? [])]" :style="lineTrailStyles">
      <div :class="[bem.e('stroke'), bem.m(status), bem.is('processing', processing), ...(strokeClass ?? [])]"
           :style="lineStrokeStyles"
      />
    </div>
    <svg v-else-if="type === 'circle' || type === 'dashboard'" v-bind="circleStyles.circle"
         :width="circleSize" :height="circleSize" :class="bem.e(type === 'circle' ? 'circle' : 'dashboard')">
      <defs v-if="circleStyles.gradient">
        <linearGradient :id="circleStyles.gradient.id">
          <stop
            v-for="stop in circleStyles.gradient.stops"
            :key="stop.offset"
            :offset="stop.offset"
            :stop-color="stop['stop-color']"
          />
        </linearGradient>
      </defs>
      <circle v-bind="circleStyles.trail" stroke-linecap="round" :class="[bem.e('trail'), ...(trailClass ?? [])]"/>
      <circle v-bind="circleStyles.stroke" stroke-linecap="round" :class="[bem.e('stroke'), ...(strokeClass ?? [])]"/>
    </svg>
    <canvas v-else-if="type === 'wave'" ref="canvas"
            :width="circleSize" :height="circleSize"
            :class="[bem.e('wave'), ...(waveClass ?? [])]"
            :style="{...(waveStyle ?? {})}"
    />
    <div
      v-if="showIndicator"
      :class="[
        bem.e('indicator'),
        bem.is(lineIndicatorPlacement, lineIndicatorPlacement),
        ...(indicatorClass ?? [])
      ]"
      :style="indicatorStyles"
    >
      <slot>{{ showIndicator ? `${actualPercent}%` : "" }}</slot>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>