<script setup lang="ts">
import {ref, computed, inject} from "vue";
import {createNamespace, darken, getContrastingColor} from "@xuyou-element/utils";
import type {ButtonEmits, ButtonInstance, ButtonProps} from "./types";
import {throttle} from "lodash-es";
import {xyIcon} from "../../Icon";
import {BUTTON_GROUP_CONTEXT_KEY} from "./constants";

defineOptions({
  name: "xyButton",
})
const bem = createNamespace("button")
const props = withDefaults(defineProps<ButtonProps>(), {
  plain: false,
  text: false,
  textBg: false,
  round: false,
  circle: false,
  dashed: false,
  strong: false,
  loading: false,
  loadingIcon: "spinner",
  disabled: false,
  autofocus: false,
  nativeType: "button",
  autoInsertSpace: false,
  color: "",
  textColor: "",
  tag: "button",
  useThrottle: true,
  throttleDuration: 500,
  block: false,
})
const emits = defineEmits<ButtonEmits>()
const slots = defineSlots()
const ctx = inject(BUTTON_GROUP_CONTEXT_KEY, void 0)
const _ref = ref<HTMLButtonElement>()

const size = computed(() => ctx?.size ?? props?.size ?? "")
const type = computed(() => ctx?.type ?? props?.type ?? "")
const disabled = computed(() => ctx?.disabled ?? props?.disabled ?? false)

const iconStyles = computed(() => ({
  marginRight: slots.default ? "6px" : "0",
}))
const buttonStyles = computed(() => {
  if (!props?.color && !props?.textColor) return {}
  return {
    ...(props?.textColor ? {
      color: props?.textColor,
      "--xy-button-hover-text-color": darken(props?.textColor, .4),
      "--xy-button-active-text-color": darken(props?.textColor, .6),
    } : {}),
    ...(props?.color ? {
      background: props?.color,
      "--xy-button-color": getContrastingColor(props?.color),
      "--xy-button-hover-color": darken(props?.color, .4),
      "--xy-button-active-color": darken(props?.color, .6),
    } : {}),
  }
})

const handleBtnClick = (e: MouseEvent) => emits("click", e)
const handleBtnClickThrottle = throttle(handleBtnClick, props.throttleDuration, {trailing: false})
defineExpose<ButtonInstance>({
  ref: _ref,
})
</script>

<template>
  <component
    ref="_ref"
    :is="tag"
    :type="tag === 'button' ? nativeType : void 0"
    :disabled="disabled || loading ? true : void 0"
    :autofocus="autofocus ? true : void 0"
    :class="{
      [bem.b()]: true,
      [bem.m(size)]: size,
      [bem.m(type)]: type,
      [bem.is('plain', plain)]: plain,
      [bem.is('text', text)]: text,
      [bem.is('textbg', textBg)]: textBg,
      [bem.is('round', round)]: round,
      [bem.is('circle', circle)]: circle,
      [bem.is('dashed', dashed)]: dashed,
      [bem.is('strong', strong)]: strong,
      [bem.is('loading', loading)]: loading,
      [bem.is('disabled', disabled)]: disabled,
      [bem.is('color', color)]: color,
      [bem.is('textcolor', textColor)]: textColor,
      [bem.is('block', block)]: block,
    }"
    :style="buttonStyles"
    @click="(e: MouseEvent) => useThrottle ? handleBtnClickThrottle(e) : handleBtnClick(e)"
  >
    <template v-if="loading">
      <slot name="loading">
        <xy-icon
          class="loading-icon"
          :icon="loadingIcon ?? 'spinner'"
          :style="iconStyles"
          spin
        />
      </slot>
    </template>
    <xy-icon v-if="icon && !loading"
             :icon="icon"
             :style="iconStyles"
             size="1x"
    />
    <slot></slot>
  </component>
</template>

<style scoped lang="scss">

</style>