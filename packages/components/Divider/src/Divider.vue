<script setup lang="ts">
import {createNamespace} from "@xuyou-element/utils";
import type {DividerProps} from "./types";
import {computed} from "vue";

defineOptions({
  name: "xyDivider",
})
const bem = createNamespace("divider")
const props = withDefaults(defineProps<DividerProps>(), {
  borderStyle: "solid",
  direction: "horizontal",
  contentPosition: "center",
})
const slots = defineSlots()
const dividerStyles = computed(() => {
  if (!props?.borderStyle) return {}
  return {
    ...(props?.borderStyle ? {
      "--xy-divider-border-style": props?.borderStyle,
    } : {}),
  }
})
const hasContent = computed(() => !!slots.default?.().length)
const contentStyles = computed(() => {
  if (!hasContent?.value) return {padding: 0}
  return {}
})
</script>

<template>
  <div
    :class="[bem.b(), bem.is(contentPosition, contentPosition), bem.m(direction)]"
    :style="dividerStyles"
  >
    <div :class="bem.e('content')" :style="contentStyles">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>