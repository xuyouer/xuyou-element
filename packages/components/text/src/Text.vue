<script setup lang="ts">
import type {TextProps} from "./types";
import {createNamespace, getContrastingColor} from "@xuyou-element/utils";
import {computed, ref} from "vue";

defineOptions({
  name: "xyText",
})
const bem = createNamespace("text")
const props = withDefaults(defineProps<TextProps>(), {
  tag: "div",
  truncated: false,
  lineClamp: "",
  color: "",
  gradient: "",
  coloured: false,
})
const slots = defineSlots()
const _ref = ref<HTMLDivElement>()
const textStyles = computed(() => {
  if (!props?.color && !props.gradient && !props?.lineClamp) return {}
  const lineClamp = props?.lineClamp <= "0" ? "1" : props?.lineClamp
  const textFillColor = getContrastingColor(props?.color)
  return {
    ...(props?.color ? {
      "--xy-text-color": props?.color,
      "--xy-text-fill-color": textFillColor,
    } : {}),
    ...(props?.gradient ? {
      "--xy-text-gradient-color": props?.gradient,
      "--xy-text-fill-color": textFillColor,
    } : {}),
    ...(props?.lineClamp ? {
      "-webkit-line-clamp": lineClamp,
    } : {}),
  }
})
</script>

<template>
  <component
    ref="_ref"
    :is="tag"
    :class="{
      [bem.b()]: true,
      [bem.m(type)]: type,
      [bem.m(size)]: size,
      [bem.is('truncated', truncated)]: truncated,
      [bem.is('line-clamp', lineClamp.toString())]: lineClamp,
      [bem.is('color', color)]: color,
      [bem.is('gradient', gradient)]: gradient,
      [bem.is('coloured', coloured)]: coloured,
    }"
    :style="textStyles"
  >
    <slot></slot>
  </component>
</template>

<style scoped lang="scss">

</style>