<script setup lang="ts">
import {
  createNamespace,
  getSVGBBoxDimension,
  hitokotoFetch,
  shiciFetch,
  textToSVGWithStr
} from "@xuyou-element/utils";
import type {RandomTextProps} from "./types";
import {computed, onMounted, ref, watch} from "vue";
import {xyIcon} from "../../Icon";

defineOptions({
  name: "xyRandomText",
})
const bem = createNamespace("randomText")
const props = withDefaults(defineProps<RandomTextProps>(), {
  type: "poetry",
  renderType: "text",
  block: false,
  intro: false,
})
const slots = defineSlots()
// const hasContent = computed(() => !!slots?.default?.().length)
const randomTextStyles = computed(() => {
  return {}
})
const textContent = ref("")
const svgRef = ref<SVGElement | null>(null)
const svgWidth = ref(0)
const svgHeight = ref(0)

const generate = async () => {
  textContent.value = props?.type === "all"
    ? (await hitokotoFetch()).hitokoto
    : await shiciFetch()
  if (props?.renderType === "svg" && svgRef?.value) {
    svgRef.value.innerHTML = textToSVGWithStr(textContent.value).svgString
    const {width, height} = getSVGBBoxDimension(svgRef?.value as SVGGraphicsElement)
    svgWidth.value = width
    svgHeight.value = height
  }
}
onMounted(generate)
watch(
  () => ({...props}),
  generate,
  {deep: true, immediate: true}
)
</script>

<template>
  <div :class="[bem.b(), bem.is('block', block)]" :style="randomTextStyles">
    <slot name="intro">
      <xy-icon
        v-if="intro" icon="quote-left"
        :class="[bem.b('intro'), ...(introClass ?? [])]"
        :style="{...(introStyle ?? {})}"
      />
    </slot>
    <div v-if="renderType === 'text'" :class="[bem.e('text'), ...(textClass ?? [])]" :style="{...(textStyle ?? {})}">
      {{ textContent }}
    </div>
    <svg v-else-if="renderType === 'svg'" ref="svgRef" :width="svgWidth" :height="svgHeight"
         :class="[bem.e('svg'), ...(textClass ?? [])]" :style="{...(textStyle ?? {})}"
    />
  </div>
</template>

<style scoped lang="scss">

</style>