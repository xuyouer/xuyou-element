<script setup lang="ts">
import {createNamespace} from "@xuyou-element/utils";
import type {PosterProps} from "./types";
import {computed} from "vue";

defineOptions({
  name: "xyPoster",
})
const bem = createNamespace("poster")
const props = withDefaults(defineProps<PosterProps>(), {})
const slots = defineSlots()
// const hasContent = computed(() => !!slots.default?.().length)
const posterStyles = computed(() => {
  return {}
})
</script>

<template>
  <div :class="bem.b()" :style="posterStyles">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">

</style>