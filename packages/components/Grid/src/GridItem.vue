<script setup lang="ts">
import {createNamespace} from "@xuyou-element/utils";
import type {GridItemProps} from "./types";
import {computed, type CSSProperties, inject, ref} from "vue";

defineOptions({
  name: "xyGridItem",
})
const bem = createNamespace("gridItem")
const props = withDefaults(defineProps<GridItemProps>(), {
  center: false,
  shadow: "hover",
  bordered: true,
  borderRadius: 0,
  disabled: false,
  colSpan: 1,
  rowSpan: 1,
  order: 0,
})
const slots = defineSlots()
// const hasContent = computed(() => !!slots.default?.().length)
const itemWidth = inject("itemWidth", ref(0))
const itemPadding = inject("itemPadding", ref(0))
const gridItemStyles = computed<CSSProperties>(() => {
  const style: CSSProperties = {
    gridColumn: `span ${props?.colSpan}`,
    gridRow: `span ${props?.rowSpan}`,
    backgroundColor: props?.backgroundColor ?? '',
    borderColor: props?.borderColor ?? '',
    borderRadius: props?.borderRadius ? `${props?.borderRadius}px` : '',
    width: typeof props?.width === 'number' ? `${props?.width}px` : props?.width,
    height: typeof props?.height === 'number' ? `${props?.height}px` : props?.height,
    order: props?.order || 0,
    padding: `${itemPadding.value}px`,
  }
  if (props?.bordered) {
    style.border = `1px solid ${props?.borderColor ?? 'rgba(73, 87, 112, .2)'}`
  }
  if (itemWidth.value > 0) {
    style.width = `${itemWidth.value}px`
    style.height = `${itemWidth.value}px`
  }
  return style
})
</script>

<template>
  <div
    :class="[bem.b(), bem.m(`shadow-${shadow}`), bem.is('bordered', bordered), bem.is('center', center), bem.is('disabled', disabled), ...(itemClass ?? [])]"
    :style="{...gridItemStyles, ...(itemStyle ?? {})}"
    v-on="{
      click: onClick,
      mouseenter: onMouseEnter,
      mouseleave: onMouseLeave,
    }"
  >
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">

</style>