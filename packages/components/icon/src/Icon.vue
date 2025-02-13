<script setup lang="ts">
import type {IconProps} from "./types";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {omit} from "lodash-es";
import {computed} from "vue";
import {createNamespace} from "@xuyou-element/utils";

defineOptions({
  name: "xyIcon",
  inheritAttrs: false,
})
const bem = createNamespace("icon")
const props = defineProps<IconProps>()
const filterProps = computed(() => omit(props, ["type", "color"]));
const customStyles = computed(() => ({color: props.color ?? void 0}));
</script>

<template>
  <i
    :class="{
      [bem.b()]: true,
      [bem.m(type)]: type,
    }"
    :style="customStyles"
    v-bind="$attrs"
  >
    <font-awesome-icon v-bind="filterProps"/>
    <slot></slot>
  </i>
</template>

<style scoped lang="scss">

</style>