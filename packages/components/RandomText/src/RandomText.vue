<script setup lang="ts">
import {createNamespace, getSVGBBoxDimension, textToSVGWithStr} from "@xuyou-element/utils";
import type {RandomTextProps} from "./types";
import {computed, onMounted, ref, watch} from "vue";
import {xyIcon} from "../../Icon";
import * as ShiCi from "jinrishici";

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
  if (!props?.randomTextStyle) return {}
  return {
    ...(props?.randomTextStyle ?? {}),
  }
})
const textContent = ref("")
const svgRef = ref<SVGElement | null>(null)
const svgWidth = ref(0)
const svgHeight = ref(0)

const fetchHitokoto = async (): Promise<string> => {
  const response = await fetch('https://v1.hitokoto.cn')
  const {hitokoto} = await response.json()
  return hitokoto
}
const generate = async () => {
  textContent.value = props?.type === "all"
    ? await fetchHitokoto()
    : await new Promise<string>((resolve) => {
      ShiCi.load((result: any) => resolve(result.data.content))
    })
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
  {deep: true}
)
</script>

<template>
  <div
    :class="[
      bem.b(),
      bem.is('block', block),
      ...(randomTextClass ?? []),
    ]"
    :style="randomTextStyles"
  >
    <xy-icon v-if="intro"
             icon="quote-left"
             :class="[bem.b('intro'), ...(introClass ?? [])]"
             :style="{...(introStyle ?? {})}"
    />
    <div v-if="renderType === 'text'" :class="bem.e('text')">{{ textContent }}</div>
    <svg v-else-if="renderType === 'svg'" ref="svgRef" :width="svgWidth" :height="svgHeight" :class="bem.e('svg')"/>
  </div>
</template>

<style scoped lang="scss">

</style>