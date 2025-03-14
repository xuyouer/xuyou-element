<script setup lang="ts">
import {createNamespace} from "@xuyou-element/utils";
import type {GridProps} from "./types";
import {computed, type CSSProperties, onMounted, provide, ref, watch} from "vue";

defineOptions({
  name: "xyGrid",
})
const bem = createNamespace("grid")
const props = withDefaults(defineProps<GridProps>(), {
  col: 3,
  square: false,
  gap: 0,
  padding: 20,
  center: false,
  shadow: "never",
  bordered: false,
  borderRadius: 6,
  disabled: false,
})
const slots = defineSlots()
// const hasContent = computed(() => !!slots.default?.().length)
const gridStyles = computed<CSSProperties>(() => {
  const style: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: `repeat(${props?.col}, 1fr)`,
    gap: `${props?.gap}px`,
    backgroundColor: props?.backgroundColor ?? '',
    borderColor: props?.borderColor ?? '',
    borderRadius: props?.borderRadius ? `${props?.borderRadius}px` : '',
    width: typeof props?.width === 'number' ? `${props?.width}px` : props?.width,
    height: typeof props?.height === 'number' ? `${props?.height}px` : props?.height,
  }
  if (props?.bordered) {
    style.border = `1px solid ${props?.borderColor ?? 'rgba(73, 87, 112, .2)'}`
  }
  return style
})
const gridRef = ref<HTMLElement | null>(null)
const itemWidth = ref<number>(0)
const calculateItemWidth = () => {
  if (gridRef.value && props?.square) {
    const containerWidth = gridRef.value.offsetWidth
    const totalGap = (props?.col - 1) * (props?.gap || 0)
    itemWidth.value = (containerWidth - totalGap) / props?.col
  }
}
onMounted(() => {
  calculateItemWidth()
  window.addEventListener("resize", calculateItemWidth)
})
watch(() => [props?.square, props?.col, props?.gap], calculateItemWidth, {deep: true, immediate: true})
provide("itemWidth", itemWidth)
const itemPadding = ref<number>(props?.padding)
watch(() => props?.padding, (newPadding) => {
  itemPadding.value = newPadding
})
provide("itemPadding", itemPadding)
</script>

<template>
  <div
    ref="gridRef"
    :class="[bem.b(), bem.m(`shadow-${shadow}`), bem.is('bordered', bordered), bem.is('center', center), bem.is('disabled', disabled)]"
    :style="gridStyles"
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