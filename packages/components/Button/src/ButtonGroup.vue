<script setup lang="ts">
import {createNamespace} from "@xuyou-element/utils";
import type {ButtonGroupProps} from "./types";
import {provide, reactive, toRef} from "vue";
import {BUTTON_GROUP_CONTEXT_KEY} from "./constants";

defineOptions({
  name: "xyButtonGroup",
})
const bem = createNamespace("buttonGroup")
const props = withDefaults(defineProps<ButtonGroupProps>(), {
  vertical: false,
})

provide(
  BUTTON_GROUP_CONTEXT_KEY,
  reactive({
    size: toRef(props, "size"),
    type: toRef(props, "type"),
    disabled: toRef(props, "disabled"),
  })
)
</script>

<template>
  <div :class="[bem.b(), bem.is('vertical', vertical)]">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">

</style>