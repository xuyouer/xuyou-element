<script setup lang="ts">
import {computed, inject} from 'vue'
import type {AvatarProps} from "./types";
import {createNamespace, getContrastingColor} from "@xuyou-element/utils";
import {xyIcon} from "../../Icon";
import {AVATAR_GROUP_CONTEXT_KEY} from "./constants";

defineOptions({
  name: "xyAvatar",
})
const bem = createNamespace("avatar");
const props = withDefaults(defineProps<AvatarProps>(), {
  fit: "cover",
  shape: "square",
  color: "",
  bordered: true,
  placeholder: false,
})
const slots = defineSlots()
const ctx = inject(AVATAR_GROUP_CONTEXT_KEY, void 0)
const type = computed(() => ctx?.type ?? props?.type ?? "")
const size = computed(() => ctx?.size ?? props?.size ?? "")
const shape = computed(() => ctx?.shape ?? props?.shape ?? "")
const iconStyles = computed(() => {
  if (!props?.color && !props.type) return {}
  const color = props?.color || (props?.type && props.type !== "default" && "#6c757d")
  return {
    ...(color ? {
      color: getContrastingColor(color),
    } : {}),
  }
})
const avatarStyles = computed(() => {
  if (!props?.color && !size?.value) return {}
  const textFillColor = getContrastingColor(props?.color)
  return {
    ...(props?.color ? {
      "--xy-avatar-color": props?.color,
      "--xy-avatar-text-color": textFillColor,
    } : {}),
    ...(typeof size?.value === "number" ? {
      "--xy-avatar-size": `${size?.value}px`,
    } : {}),
  }
})
const imgStyles = computed(() => {
  if (!props?.fit) return {}
  return {
    ...(props?.fit ? {
      "object-fit": props?.fit,
    } : {}),
  }
})
const getSlotText = () => {
  const slotContent = slots.default?.()
  return slotContent?.reduce(
    (acc: string, curr: { children: string | string[] }) =>
      acc + (Array.isArray(curr.children)
        ? curr.children.join('')
        : curr.children),
    ""
  ) ?? ""
}
const getSlotTextLength = computed(() => getSlotText().length)
const slotStyles = computed(() => {
  const length = getSlotTextLength.value
  const maxLength = 3
  const baseFontSize = props?.size === "tiny" ? 12 : props?.size === "large" ? 16 : 14
  const shrinkFactor = props?.size === "tiny" ? 2.5 : props?.size === "small" ? 2.5 : 1.5
  return {
    ...(length > maxLength ? {
      "font-size": `${baseFontSize - (length - maxLength) * shrinkFactor}px`,
    } : {}),
  }
})
</script>

<template>
  <div
    :class="[
      bem.b(),
      bem.m(type),
      bem.m(typeof size === 'number' ? 'custom' : size),
      bem.m(shape),
      bem.is('color', color),
      bem.is('bordered', bordered),
      bem.is('placeholder', placeholder),
    ]"
    :style="avatarStyles"
    :alt="getSlotText()"
  >
    <xy-icon v-if="icon" :icon="icon" :style="iconStyles" size="1x"/>
    <img v-if="src" :src="src ?? void 0" :srcset="srcSet ?? void 0" :alt="alt ?? void 0" :style="imgStyles"/>
    <div v-if="slots.default" :style="slotStyles">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>