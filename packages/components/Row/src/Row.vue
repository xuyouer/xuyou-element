<script setup lang="ts">
import {createNamespace} from "@xuyou-element/utils";
import type {RowProps} from "./types";
import {computed, type CSSProperties} from "vue";

defineOptions({
  name: "xyRow",
})
const bem = createNamespace("row")
const props = withDefaults(defineProps<RowProps>(), {
  direction: "row",
  wrap: true,
  gap: 0,
})
// const hasContent = computed(() => !!slots.default?.().length)
const rowStyles = computed<CSSProperties>(() => {
  const style: CSSProperties = {
    display: "flex",
    flexDirection: props?.direction,
    flexWrap: props?.wrap ? "wrap" : "nowrap",
    gap: `${props?.gap}px`,
    alignItems: props?.align,
    justifyContent: props?.justify,
  }
  return {...style, ...(props?.rowStyle ?? {})}
})
</script>

<template>
  <div :class="[bem.b(), ...(rowClass ?? [])]" :style="rowStyles" @click="onClick">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">

</style>