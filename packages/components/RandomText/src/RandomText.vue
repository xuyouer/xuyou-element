<script setup lang="ts">
import {createNamespace} from "@xuyou-element/utils";
import type {RandomTextProps} from "./types";
import {computed} from "vue";

defineOptions({
  name: "xyRandomText",
})
const bem = createNamespace("randomText")
const props = withDefaults(defineProps<RandomTextProps>(), {})
const slots = defineSlots()
// const hasContent = computed(() => !!slots?.default?.().length)
const randomTextStyles = computed(() => {
  return {}
})
</script>

<template>
  <div :class="bem.b()" :style="randomTextStyles">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">

</style>