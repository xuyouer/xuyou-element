<script setup lang="ts">
import {createNamespace, getContrastingColor} from "@xuyou-element/utils";
import type {BadgeProps} from "./types";
import {computed, type CSSProperties} from "vue";

defineOptions({
  name: "xyBadge",
})
const bem = createNamespace("badge")
const props = withDefaults(defineProps<BadgeProps>(), {
  type: "danger",
  max: 99,
  dot: false,
  hidden: false,
  showZero: false,
  color: "",
  corner: false,
  remark: false,
})
const slots = defineSlots()
const hasContent = computed(() => !!slots.default?.().length)
const badgeStyles = computed(() => {
  if (!props?.color && !props?.offset) return {}
  const textFillColor = getContrastingColor(props?.color)
  return {
    ...(props?.color ? {
      "--xy-badge-color": props?.color,
      "--xy-badge-text-color": textFillColor,
    } : {}),
    ...(props?.offset ? {
      "--xy-badge-transform": `translate(${props.offset[0]}px, ${props.offset[1]}px)`,
    } : {}),
  }
})
const badgeContent = computed(() => {
  const safeMax = Math.max(1, props.max)
  const value = typeof props.value === "string" && /^\d+$/.test(props.value)
    ? Number(props.value)
    : props.value
  if (props.dot || (!props.showZero && value === 0)) return ""
  if (props.showZero && value === "") return 0
  return typeof value === "number" && safeMax !== undefined && value > safeMax
    ? `${safeMax}+`
    : value
})
const badgeValueStyles = computed<CSSProperties>(() => {
  if (hasContent?.value && !props?.badgeStyle) return {}
  return {
    ...(!hasContent?.value ? {
      position: "initial",
    } : {}),
    ...(props?.badgeStyle ?? {}),
  }
})
</script>

<template>
  <div
    v-if="!hidden"
    :class="[
      bem.b(),
      bem.m(type),
      bem.is('dot', dot),
      bem.is('color', color),
      bem.is('corner', corner),
      bem.is('remark', remark),
    ]"
    :style="badgeStyles"
  >
    <div :class="[bem.b('val'), ...(badgeClass ?? [])]" :style="badgeValueStyles">
      <slot name="value">
        {{ badgeContent }}
      </slot>
    </div>
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">

</style>