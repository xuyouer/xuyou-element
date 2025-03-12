<script setup lang="ts">
import {barcodeAddon, barcodeToCanvas, barcodeToSVG, createNamespace} from "@xuyou-element/utils";
import type {BarCodeProps} from "./types";
import {onMounted, ref, watch} from "vue";

defineOptions({
  name: "xyBarCode",
})
const bem = createNamespace("barcode")
const props = withDefaults(defineProps<BarCodeProps>(), {
  type: "default",
  renderType: "canvas",
  blank: 20,
  options: () => ({
    width: 2,
    height: 100,
    format: "CODE128",
    displayValue: true,
    font: "monospace",
    textAlign: "center",
    textPosition: "bottom",
    textMargin: 2,
    fontSize: 20,
    background: "#FFF",
    lineColor: "#000",
    margin: 10,
    valid: () => {
    },
    ean128: false,
    flat: false,
    lastChar: ">",
  }),
})
const slots = defineSlots()
// const hasContent = computed(() => !!slots.default?.().length)
const canvasBarcode = ref<HTMLCanvasElement | null>(null)
const svgBarcode = ref<SVGSVGElement | null>(null)
const generateBarCode = () => {
  const element = props.renderType === "canvas" ? canvasBarcode.value : svgBarcode.value
  if (!element) return
  const {value = "", addonValue = "", options, eanOptions, addonOptions, blank} = props
  if (props.type === "default") {
    props.renderType === "canvas"
      ? barcodeToCanvas(element as HTMLCanvasElement, value, options)
      : barcodeToSVG(element as SVGSVGElement, options)
  } else if (props.type === "addon") {
    barcodeAddon(element, value, addonValue, blank, options, eanOptions, addonOptions)
  }
}
onMounted(generateBarCode)
watch(() => ({...props}), generateBarCode, {deep: true, immediate: true})
</script>

<template>
  <div :class="bem.b()">
    <canvas v-if="renderType === 'canvas'" ref="canvasBarcode"
            :class="[...(barcodeClass ?? [])]" :style="{...(barcodeStyle ?? {})}"
    />
    <svg v-else-if="renderType === 'svg'" ref="svgBarcode" :data-value="value"
         :class="[...(barcodeClass ?? [])]" :style="{...(barcodeStyle ?? {})}"
    />
  </div>
</template>

<style scoped lang="scss">

</style>