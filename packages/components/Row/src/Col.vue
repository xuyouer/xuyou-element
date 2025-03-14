<script setup lang="ts">
import {createNamespace} from "@xuyou-element/utils";
import type {ColProps} from "./types";
import {computed, type CSSProperties} from "vue";

defineOptions({
  name: "xyCol",
})
const bem = createNamespace("col")
const props = withDefaults(defineProps<ColProps>(), {
  span: 24,
  hidden: false,
  flex: "0 1 auto",
})
// const hasContent = computed(() => !!slots.default?.().length)
const getMarginLeft = (offset?: number, push?: number, pull?: number): string | undefined => {
  return (
    (offset !== undefined && `${(offset / 24) * 100}%`) ||
    (push !== undefined && `${(push / 24) * 100}%`) ||
    (pull !== undefined && `-${(pull / 24) * 100}%`) ||
    undefined
  )
}
const colStyles = computed<CSSProperties>(() => {
  const style: CSSProperties = {
    display: props?.hidden ? "none" : "inline-flex",
    flex: props?.flex,
    order: props?.order,
    alignSelf: props?.alignSelf,
    alignItems: props?.align,
    justifyContent: props?.justify,
    width: props?.span ? `${(props?.span / 24) * 100}%` : undefined,
    marginLeft: getMarginLeft(props?.offset, props?.push, props?.pull)
  }
  return {...style, ...(props?.colStyle ?? {})}
})
const responsiveStyle = computed(() => {
  if (!props?.responsive) return {}
  const breakpoints = {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1600,
  }
  const styles: Record<string, CSSProperties> = {}
  Object.entries(props?.responsive).forEach(([key, value]) => {
    const breakpoint = breakpoints[key as keyof typeof breakpoints]
    if (value) {
      styles[`@media (min-width: ${breakpoint}px)`] = {
        display: value.hidden ? "none" : "inline-flex",
        flex: value.flex,
        order: value.order,
        alignSelf: value.alignSelf,
        alignItems: value.align,
        justifyContent: value.justify,
        width: value.span ? `${(value.span / 24) * 100}%` : undefined,
        marginLeft: getMarginLeft(value.offset, value.push, value.pull),
      }
    }
  })
  return styles
})
</script>

<template>
  <div :class="[bem.b(), ...(colClass ?? [])]" :style="{...colStyles, ...responsiveStyle}" @click="onClick">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">

</style>