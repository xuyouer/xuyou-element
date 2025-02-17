<script setup lang="ts">
import type {LinkProps} from "./types";
import {createNamespace, getContrastingColor} from "@xuyou-element/utils";
import {computed} from "vue";
import {xyIcon} from "../../Icon";

defineOptions({
  name: "xyLink",
})
const bem = createNamespace("link")
const props = withDefaults(defineProps<LinkProps>(), {
  underline: true,
  disabled: false,
  target: "_self",
  color: "",
})
const slots = defineSlots()
const iconStyles = computed(() => ({
  marginRight: slots.default ? "4px" : "0",
  marginLeft: slots.default ? "2px" : "0",
}))
const linkStyles = computed(() => {
  if (!props?.color) return {}
  const textFillColor = getContrastingColor(props?.color)
  return {
    ...(props?.color ? {
      "--xy-link-color": props?.color,
      "--xy-link-fill-color": textFillColor,
    } : {}),
  }
})
</script>

<template>
  <a
    :class="{
      [bem.b()]: true,
      [bem.m(type)]: type,
      [bem.m(size)]: size,
      [bem.is('underline', underline)]: underline,
      [bem.is('disabled', disabled)]: disabled,
      [bem.is('color', color)]: color,
    }"
    :title="title ? title : void 0"
    :href="href ? href : void 0"
    :target="target"
    :style="linkStyles"
  >
    <xy-icon v-if="icon"
             :icon="icon"
             :type="type"
             :color="color"
             :style="iconStyles"
             size="1x"
    />
    <slot></slot>
  </a>
</template>

<style scoped lang="scss">

</style>