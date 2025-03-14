<script setup lang="ts">
import {createNamespace} from "@xuyou-element/utils";
import type {EmptyProps} from "./types";
import {computed, type CSSProperties} from "vue";
import {xyIcon} from "../../Icon";
import {xyButton} from "../../Button";

defineOptions({
  name: "xyEmpty",
})
const bem = createNamespace("empty")
const props = withDefaults(defineProps<EmptyProps>(), {
  description: "无数据",
  showExtra: false,
  showIcon: false,
  showImage: true,
  showDescription: true,
  imageSize: "default",
  // extra: "返回首页",
})
const slots = defineSlots()
// const hasContent = computed(() => !!slots.default?.().length)
const imgStyles = computed<CSSProperties>(() => {
  const style: CSSProperties = {
    width: typeof props?.imageSize === 'number' ? `${props?.imageSize}px` : undefined,
  }
  return style
})
</script>

<template>
  <div :class="bem.b()">
    <div v-if="showIcon" :class="[bem.e('icon'), ...(iconClass ?? [])]" :style="{...(iconStyle ?? {})}">
      <slot name="icon">
        <xy-icon size="2x" :icon="['fas', 'inbox']"/>
      </slot>
    </div>
    <div v-if="showImage" :class="[bem.e('image'), bem.m(`img-${imageSize}`), ...(imageClass ?? [])]"
         :style="{...(imgStyles ?? {}), ...(imageStyle ?? {})}">
      <slot name="image">
        <svg t="1741990966215" viewBox="0 0 1625 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
             p-id="2111" :width="typeof imageSize === 'number' ? imageSize : undefined"
             :height="typeof imageSize === 'number' ? imageSize : undefined" :class="bem.e('img')">
          <path
            d="M0 839.190261c0 46.502957 84.457739 91.113739 234.785391 123.993043 150.327652 32.879304 354.214957 51.355826 566.828522 51.355826 212.591304 0 416.50087-18.476522 566.828522-51.355826 150.327652-32.879304 234.785391-77.490087 234.785391-123.993043 0-46.525217-84.457739-91.113739-234.785391-123.993044C1218.114783 682.295652 1014.205217 663.81913 801.613913 663.81913s-416.50087 18.476522-566.828522 51.355827C84.457739 748.076522 0 792.665043 0 839.190261z"
            fill="#F5F5F5" p-id="2112"></path>
          <path
            d="M1390.280348 576.155826H212.902957v-247.986087L470.928696 35.06087C483.461565 12.53287 506.011826 0 528.539826 0h546.103652c22.550261 0 45.100522 12.53287 60.104348 37.576348l255.532522 290.593391v247.986087zM237.968696 551.112348h1127.268174v-215.440696L1114.735304 50.109217c-12.53287-17.541565-25.065739-27.558957-40.069565-27.558956H528.517565c-15.026087 0-27.536696 10.017391-37.576348 25.043478L237.968696 338.18713v212.925218z"
            fill="#D9D9D9" p-id="2113"></path>
          <path
            d="M1042.075826 410.824348c0-40.069565 25.043478-72.637217 55.117913-72.637218H1377.725217V791.596522c0 52.602435-32.567652 97.680696-75.152695 97.680695H300.588522c-40.069565 0-75.152696-42.585043-75.152696-97.680695V338.18713H505.989565c30.052174 0 55.117913 32.567652 55.117913 72.637218 0 40.069565 25.043478 72.637217 55.117913 72.637217h370.732522c30.052174 2.515478 55.117913-32.545391 55.117913-72.637217z"
            fill="#FAFAFA" p-id="2114" class="selected"></path>
          <path
            d="M1302.594783 901.810087H300.588522c-47.593739 0-87.685565-50.086957-87.685565-110.213565V325.654261h293.108869c37.576348 0 67.628522 37.576348 67.628522 85.170087 0 32.567652 20.034783 60.104348 42.585043 60.104348h370.754783c22.528 0 42.562783-27.536696 42.562783-60.104348 0-47.593739 30.052174-85.170087 67.650782-85.170087h293.086609v465.92c0 60.126609-37.576348 110.235826-87.685565 110.235826zM237.968696 350.697739V791.596522c0 47.593739 27.558957 85.170087 62.619826 85.170087h1002.006261c35.08313 0 62.642087-37.576348 62.642087-85.170087V350.697739H1097.193739c-22.550261 0-42.585043 27.558957-42.585043 60.126609 0 47.593739-30.052174 85.170087-67.628522 85.170087H616.20313c-37.576348 0-67.628522-37.576348-67.628521-85.170087 0-32.567652-20.034783-62.619826-42.585044-62.619826H237.968696v2.493217z"
            fill="#D9D9D9" p-id="2115"></path>
        </svg>
      </slot>
    </div>
    <div v-if="showDescription" :class="[bem.e('desc'), bem.m(`font-${imageSize}`), ...(descClass ?? [])]"
         :style="{...(descStyle ?? {})}">
      <slot>{{ description }}</slot>
    </div>
    <div v-if="showExtra" :class="[bem.e('extra'), ...(extraClass ?? [])]" :style="{...(extraStyle ?? {})}"
         @click="onClick">
      <slot name="extra">
        <xy-button type="primary" :size="typeof imageSize === 'string' ? imageSize : 'default'">{{ extra }}</xy-button>
      </slot>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>