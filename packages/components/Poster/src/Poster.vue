<script setup lang="ts">
import {createNamespace} from "@xuyou-element/utils";
import type {PosterProps} from "./types";
import {computed} from "vue";
import {xyBadge} from "../../Badge";
import {xyCard} from "../../Card";
import {xyCover} from "../../Cover";
import {xyDivider} from "../../Divider";
import {xyQrCode} from "../../QrCode";
import {xyTime} from "../../Time";

defineOptions({
  name: "xyPoster",
})
const bem = createNamespace("poster")
const props = withDefaults(defineProps<PosterProps>(), {
  width: 250,
})
const slots = defineSlots()
// const hasContent = computed(() => !!slots.default?.().length)
const posterStyles = computed(() => {
  if (!props?.width && !props?.posterStyle) return {}
  return {
    ...(props?.width ? {
      width: `${props?.width}px`,
    } : {}),
    ...(props?.posterStyle ?? {}),
  }
})
</script>

<template>
  <div :class="[bem.b(), ...(posterClass ?? [])]" :style="posterStyles">
    <xy-card block :headerStyle="{padding: 0}">
      <template #header>
        <xy-badge value="测试"
                  :badgeStyle="{background: '#F2F2F2', color: '#2F2F2F', borderRadius: '4px', top: '10px', right: 'initial', left: '10px'}"
        >
          <xy-cover :width="width" :height="width"
                    title="土坡上的狗尾巴草" subtitle="小咪楂"
                    :outlined="false"
                    :feather="true"
                    :coverStyle="{borderRadius: 0,}"
          >
            <img
              src="https://m.media-amazon.com/images/M/MV5BZjM3ZGQ4ZTMtOTNjMS00NmJlLTljMWUtNWExMzJhMGJlMWNiXkEyXkFqcGc@._V1_QL75_UY562_CR7,0,380,562_.jpg"
              alt=""/>
          </xy-cover>
        </xy-badge>
      </template>
      <xy-time format="MM月dd日"/>
      <xy-divider direction="vertical"/>
      <template #footer>
        <xy-qr-code :bordered="false" :padding="1" :size="50" value="测试"/>
      </template>
    </xy-card>
  </div>
</template>

<style scoped lang="scss">

</style>