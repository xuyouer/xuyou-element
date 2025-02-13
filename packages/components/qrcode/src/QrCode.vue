<script setup lang="ts">
import {createNamespace} from "@xuyou-element/utils";
import type {QrCodeProps} from "./types";
import {computed, type CSSProperties} from "vue";

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
  padding: 10,
})
const slots = defineSlots()
// const hasContent = computed(() => !!slots.default?.().length)
const qrCodeStyles = computed<CSSProperties>(() => {
  if (!props?.color && !props?.backgroundColor && !props?.qrCodeStyle) return {}
  return {
    ...(props?.color ? {} : {}),
    ...(props?.backgroundColor ? {} : {}),
    ...(props?.qrCodeStyle ?? {}),
  }
})
</script>

<template>
  <div :class="[bem.b(), ...(qrCodeClass ?? [])]" :style="qrCodeStyles">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">

</style>