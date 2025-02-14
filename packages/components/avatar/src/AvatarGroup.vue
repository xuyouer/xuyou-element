<script setup lang="ts">
import {createNamespace} from "@xuyou-element/utils";
import type {AvatarGroupProps} from "./types";
import {computed, onMounted, provide, reactive, ref, toRef, watch} from "vue";
import {AVATAR_GROUP_CONTEXT_KEY} from "./constants";
import {xyAvatar} from "../index";

defineOptions({
  name: "xyAvatarGroup",
})
const bem = createNamespace("avatarGroup")
const props = withDefaults(defineProps<AvatarGroupProps>(), {
  max: 3,
  spacing: -10,
  direction: "horizontal",
  overflow: "number",
})
provide(
  AVATAR_GROUP_CONTEXT_KEY,
  reactive({
    type: toRef(props, "type"),
    size: toRef(props, "size"),
    shape: toRef(props, "shape"),
  })
)
const slots = defineSlots()
// const hasContent = computed(() => !!slots.default?.().length)
const validatedMax = computed(() => Math.max(1, props?.max > 0 ? props?.max : 1))
const childrenCount = computed(() => slots.default?.().length ?? 0)
const displayedCount = computed(() => props.overflow === "number" ? Math.min(childrenCount?.value, validatedMax?.value) : childrenCount.value)
const remainingCount = computed(() => props.overflow === "number" ? childrenCount?.value - displayedCount?.value : 0)

const avatarGroupStyles = computed(() => {
  if (!props?.spacing) return {}
  return {
    ...(props?.spacing ? {
      "--xy-avatar-group-spacing": `${props?.spacing}px`,
    } : {}),
  }
})
const avatarGroup = ref<HTMLDivElement | null>(null)
const updateHiddenAvatars = () => {
  if (avatarGroup?.value) {
    const children: HTMLDivElement[] = Array.from(avatarGroup?.value?.querySelectorAll(".xy-avatar-group > *:not(.xy-avatar-group-more)"))
    if (props.overflow === "number") {
      children.forEach((child: HTMLDivElement, index: number) => {
        child.style.display = index >= validatedMax?.value ? "none" : ""
      })
    } else {
      children.forEach((child: HTMLDivElement) => {
        child.style.display = ""
      })
    }
  }
}
onMounted(updateHiddenAvatars)
watch(() => props?.max, updateHiddenAvatars)
watch(() => props?.overflow, updateHiddenAvatars)
</script>

<template>
  <div
    ref="avatarGroup"
    :class="[
      bem.b(),
      bem.is(direction, direction),
      bem.is(overflow, overflow),
    ]"
    :style="avatarGroupStyles"
  >
    <slot></slot>
    <xy-avatar
      v-if="remainingCount > 0"
      type="primary"
      :class="bem.b('more')"
    >
      +{{ remainingCount }}
    </xy-avatar>
  </div>
</template>

<style scoped lang="scss">

</style>