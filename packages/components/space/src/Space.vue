<script setup lang="ts">
import {createNamespace} from "@xuyou-element/utils";
import type {SpaceProps} from "./types";
import {computed, type CSSProperties} from "vue";

defineOptions({
  name: "xySpace",
})
const bem = createNamespace("space")
const props = withDefaults(defineProps<SpaceProps>(), {
  direction: "horizontal",
  alignItems: "center",
  justifyContent: "flex-start",
  size: "default",
  wrap: false,
  block: true,
  overflow: "hidden",
})
const slots = defineSlots()
// const hasContent = computed(() => !!slots?.default?.().length)
const spaceStyles = computed<CSSProperties>(() => {
  if (
    !props?.alignItems
    && !props?.justifyContent
    && !props?.overflow
    && !props?.size
    && !props?.spaceStyle
  ) return {}
  return {
    ...(props?.alignItems ? {
      alignItems: props?.alignItems,
    } : {}),
    ...(props?.justifyContent ? {
      justifyContent: props?.justifyContent,
    } : {}),
    ...(props?.overflow ? {
      overflow: props?.overflow,
    } : {}),
    ...(typeof props?.size === "number" ? {
      "--xy-space-size": `${props?.size}px`,
    } : {}),
    ...(props?.spaceStyle ?? {}),
  }
})
</script>

<template>
  <div
    :class="[
      bem.b(),
      bem.m(direction),
      bem.m(typeof size === 'number' ? 'custom' : size),
      bem.is('wrap', wrap),
      bem.is('block', block),
      ...(spaceClass ?? []),
    ]"
    :style="spaceStyles"
  >
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">

</style>