<script setup lang="ts">
import {createNamespace} from "@xuyou-element/utils";
import type {CoverProps} from "./types";
import {computed} from "vue";

defineOptions({
  name: "xyCover",
})
const bem = createNamespace("cover")
const props = withDefaults(defineProps<CoverProps>(), {
  bordered: false,
  outlined: true,
  mask: false,
  feather: false,
  width: 110,
  height: 150,
  titlePosition: "bottom-start",
  padding: 10,
})
const slots = defineSlots()
const coverStyles = computed(() => {
  if (!props?.width && !props?.height && !props?.coverStyle) return {}
  return {
    ...(props?.width ? {
      "--xy-cover-width": `${props?.width}px`,
    } : {}),
    ...(props?.height ? {
      "--xy-cover-height": `${props?.height}px`,
    } : {}),
    ...(props?.coverStyle ?? {}),
  }
})
const hasContent = computed(() => !!slots.default?.().length)
const titleStyles = computed(() => {
  if (!hasContent?.value && !props?.padding) return {}
  let padding = Math.max(0, Math.min(20, props?.padding || 10))
  return {
    ...(hasContent?.value ? {
      "--xy-cover-title-color": "rgba(255, 255, 255, .8)",
      "--xy-cover-subtitle-color": "rgba(255, 255, 255, .7)",
    } : {}),
    ...(padding > 0 ? {
      padding: `${padding}px`,
    } : {}),
  }
})
</script>

<template>
  <div
    :class="[
      bem.b(),
      bem.is('bordered', bordered),
      bem.is('outlined', outlined),
      ...(coverClass ?? []),
    ]"
    :style="coverStyles"
  >
    <div v-if="title || subtitle"
         :class="[
           bem.b('info'),
           bem.is('mask', mask),
           bem.is('feather', feather),
           bem.is(titlePosition, titlePosition)
         ]"
         :style="titleStyles"
    >
      <div v-if="title" :class="bem.be('info','title')">{{ title }}</div>
      <div v-if="subtitle" :class="bem.be('info','subtitle')">{{ subtitle }}</div>
    </div>
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">

</style>