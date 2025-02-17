<script setup lang="ts">
import {createNamespace, timeFormat} from "@xuyou-element/utils";
import type {TimeProps} from "./types";
import {computed, onMounted, onUnmounted, ref, watch} from "vue";

defineOptions({
  name: "xyTime",
})
const bem = createNamespace("time")
const props = withDefaults(defineProps<TimeProps>(), {
  // time: Date.now(),
  // to: Date.now(),
  type: "datetime",
  unix: false,
  interval: 0,
})
const slots = defineSlots()
// const hasContent = computed(() => !!slots?.default?.().length)
const timeStyles = computed(() => {
  if (!props?.timeStyle) return {}
  return {
    ...(props?.timeStyle ?? {}),
  }
})

const displayedTime = ref<string | number>("")
let intervalId: NodeJS.Timeout | null = null
const updateTime = () => {
  const {time, to, format, timeZone, type, unix, interval} = props
  const timeProps = {
    time: time ?? Date.now(),
    to: to ?? Date.now(),
    format,
    timeZone,
    type,
    unix,
    interval,
  }
  displayedTime.value = timeFormat(timeProps)
}
onMounted(() => {
  updateTime()
  if (props?.interval > 0) {
    intervalId = setInterval(updateTime, props?.interval * 1000)
  }
})
onUnmounted(() => {
  intervalId && clearInterval(intervalId)
  intervalId = null
})
watch(
  () => ({...props}),
  updateTime,
  {deep: true}
)
watch(
  () => props?.interval,
  (newVal) => {
    intervalId && clearInterval(intervalId)
    intervalId = null
    if (newVal > 0) {
      intervalId = setInterval(updateTime, newVal * 1000)
    }
  }
)
</script>

<template>
  <div :class="[bem.b(), ...(timeClass ?? [])]" :style="timeStyles">
    {{ displayedTime }}
  </div>
</template>

<style scoped lang="scss">

</style>