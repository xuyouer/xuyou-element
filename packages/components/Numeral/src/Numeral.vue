<script setup lang="ts">
import {createNamespace, numeralFormat, nzhChinese} from "@xuyou-element/utils";
import type {NumeralProps} from "./types";
import {computed, onMounted, ref, watch} from "vue";

defineOptions({
  name: "xyNumeral",
})
const bem = createNamespace("numeral")
const props = withDefaults(defineProps<NumeralProps>(), {
  format: "0,0.00",
  upperCaseBeforeDecimal: false,
  chinese: false,
})
const slots = defineSlots()
// const hasContent = computed(() => !!slots?.default?.().length)
const numeralStyles = computed(() => {
  if (!props?.numeralStyle) return {}
  return {
    ...(props?.numeralStyle ?? {}),
  }
})
const displayedValue = ref<string | number | null | undefined>("")
const formatValue = () => {
  displayedValue.value =
    props?.chinese
      ? nzhChinese(props?.value)
      : props?.format
        ? numeralFormat(props?.value, props?.format)
        : props?.value
}
onMounted(formatValue)
watch(
  () => ({...props}),
  formatValue,
  {immediate: true, deep: true},
)
const integerPart = ref("")
const decimalPart = ref("")
const splitValue = () => {
  const valueStr = String(displayedValue.value ?? "")
  const [intPart, decPart = ""] = valueStr.split(".")
  integerPart.value = intPart
  decimalPart.value = decPart
}
onMounted(splitValue)
watch(displayedValue, splitValue)
</script>

<template>
  <div :class="[bem.b(), ...(numeralClass ?? [])]" :style="numeralStyles">
    <div v-if="prefix" :class="[bem.e('prefix'), ...(prefixClass ?? [])]" :style="{...(prefixStyle ?? {})}">
      <slot name="prefix">{{ prefix }}</slot>
    </div>
    <div :class="bem.b('value')">
      <div
        :class="[
          bem.e('integer'),
          upperCaseBeforeDecimal && decimalPart ? 'upper' : void 0,
          ...(upperClass ?? []),
        ]"
        :style="{...(upperStyle ?? {})}"
      >
        {{ integerPart }}
      </div>
      <div v-if="decimalPart" :class="bem.e('decimal')">.{{ decimalPart }}</div>
    </div>
    <div v-if="suffix" :class="[bem.e('suffix'), ...(suffixClass ?? [])]" :style="{...(suffixStyle ?? {})}">
      <slot name="suffix">{{ suffix }}</slot>
    </div>
    <br>
  </div>
</template>

<style scoped lang="scss">

</style>