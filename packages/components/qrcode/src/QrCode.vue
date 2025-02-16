<script setup lang="ts">
import {createNamespace} from "@xuyou-element/utils";
import type {QrCodeProps} from "./types";
import {computed, type CSSProperties, onMounted, ref, watch} from "vue";
import {xyAvatar} from "../../Avatar";
import QRCode from "qrcode";

defineOptions({
  name: "xyQrCode",
})
const bem = createNamespace("qrCode")
const props = withDefaults(defineProps<QrCodeProps>(), {
  size: 100,
  color: "#000",
  backgroundColor: "#FFF",
  level: "M",
  type: "canvas",
  padding: 4,
  logoSize: 30,
  logoShape: "square",
  showLogo: false,
  bordered: true,
})
const slots = defineSlots()
// const hasContent = computed(() => !!slots.default?.().length)
const canvasRef = ref<HTMLCanvasElement | null>(null)
const svgRef = ref<SVGElement | null>(null)
const qrCodeStyles = computed<CSSProperties>(() => {
  if (!props?.size && !props?.backgroundColor && !props?.qrCodeStyle) return {}
  return {
    ...(props?.size ? {
      width: `${props?.size}px`,
      height: `${props?.size}px`,
    } : {}),
    ...(props?.backgroundColor ? {
      "--xy-qr-code-background-color": props?.backgroundColor,
    } : {}),
    ...(props?.qrCodeStyle ?? {}),
  }
})
const qrCodeData = computed(() => {
  return {
    value: props?.value,
    options: {
      errorCorrectionLevel: props?.level,
      margin: props?.padding,
      width: props?.size,
      color: {
        dark: props?.color,
        light: props?.backgroundColor,
      },
    },
  }
})
const generateQrCode = async () => {
  if (!qrCodeData?.value?.value) return
  try {
    if (props?.type === "canvas" && canvasRef?.value) {
      await QRCode.toCanvas(canvasRef?.value, qrCodeData?.value?.value, {
        ...qrCodeData?.value?.options,
      })
    } else if (props?.type === "svg" && svgRef.value) {
      svgRef.value.innerHTML = await QRCode.toString(qrCodeData?.value?.value, {
        ...qrCodeData?.value?.options,
        type: 'svg',
      })
    }
  } catch (error) {
    console.error("生成二维码失败: ", error)
  }
}
onMounted(generateQrCode)
watch(
  () => ({...props}),
  generateQrCode,
  {deep: true}
)
</script>

<template>
  <div
    :class="[
      bem.b(),
      bem.is('bordered', bordered),
      ...(qrCodeClass ?? []),
    ]"
    :style="qrCodeStyles"
  >
    <canvas v-if="type === 'canvas'" ref="canvasRef" :width="size" :height="size"/>
    <svg v-else-if="type === 'svg'" ref="svgRef" :width="size" :height="size"/>
    <xy-avatar
      v-if="showLogo && (logo || logoIcon)"
      :size="logoSize"
      :shape="logoShape"
      :src="logo"
      :icon="logoIcon"
      :color="color"
      :bordered="bordered"
      :class="bem.b('logo')"
    />
  </div>
</template>

<style scoped lang="scss">

</style>