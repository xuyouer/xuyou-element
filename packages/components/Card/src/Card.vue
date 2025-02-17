<script setup lang="ts">
import {createNamespace, getContrastingColor} from "@xuyou-element/utils";
import type {CardEmits, CardProps} from "./types";
import {computed, ref} from "vue";
import {xyButton} from "../../Button";

defineOptions({
  name: "xyCard",
})
const bem = createNamespace("card")
const props = withDefaults(defineProps<CardProps>(), {
  shadow: "never",
  contentShadow: false,
  bordered: true,
  closable: false,
  color: "",
  block: false,
})
const emits = defineEmits<CardEmits>()
const slots = defineSlots()
const cardStyles = computed(() => {
  if (!props?.color) return {}
  const textFillColor = getContrastingColor(props?.color)
  return {
    ...(props?.color ? {
      "--xy-card-color": props?.color,
      "--xy-card-fill-color": textFillColor,
    } : {}),
  }
})
const hasContent = computed(() => !!slots.default?.().length)
const hasHeader = computed(() => !!slots.header || !!props.header)
const hasFooter = computed(() => !!slots.footer || !!props.footer)
const visible = ref(true)
const handleClose = (e: MouseEvent) => {
  visible.value = !visible.value
  emits("close", e)
}
</script>

<template>
  <div
    v-if="visible"
    :class="[
      bem.b(),
      bem.is(shadow, shadow),
      bem.is('contentShadow', contentShadow),
      bem.is('bordered', bordered),
      bem.is('color', color),
      bem.is('block', block),
    ]"
    :style="cardStyles"
  >
    <div v-if="hasHeader" :class="[bem.b('header'), ...(headerClass ?? [])]" :style="{...(headerStyle ?? {})}">
      <slot name="header">{{ header }}</slot>
    </div>
    <div v-if="hasContent" :class="[bem.b('section'), ...(bodyClass ?? [])]" :style="{...(bodyStyle ?? {})}">
      <slot></slot>
    </div>
    <div v-if="hasFooter" :class="[bem.b('footer'), ...(footerClass ?? [])]" :style="{...(footerStyle ?? {})}">
      <slot name="footer">{{ footer }}</slot>
    </div>
    <div v-if="closable" :class="bem.b('closable')" @click="(e: MouseEvent) => handleClose(e)">
      <xy-button size="small" text icon="xmark" :color="color"/>
    </div>
    <svg v-if="contentShadow" width="0" height="0">
      <filter id="content-shadow-filter">
        <feOffset dx="10" dy="10"/>
        <feGaussianBlur stdDeviation="12"/>
        <feMerge>
          <feMergeNode/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </svg>
  </div>
</template>

<style scoped lang="scss">

</style>