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
import {xyRandomText} from "../../RandomText";

defineOptions({
  name: "xyPoster",
})
const bem = createNamespace("poster")
const props = withDefaults(defineProps<PosterProps>(), {
  width: 320,
})
const slots = defineSlots()
// const hasContent = computed(() => !!slots.default?.().length)
const posterStyles = computed(() => {
  if (!props?.width) return {}
  return {
    ...(props?.width ? {
      width: `${props?.width}px`,
    } : {}),
  }
})
</script>

<template>
  <div :class="bem.b()" :style="posterStyles">
    <xy-card block :headerStyle="{padding: 0}"
             :class="[...(posterClass ?? [])]" :style="{...(props?.posterStyle ?? {})}"
    >
      <template #header>
        <xy-badge value="测试"
                  :badgeStyle="{background: '#F2F2F2', color: '#2F2F2F', borderRadius: '4px', top: '10px', right: 'initial', left: '10px'}"
        >
          <xy-cover :width="width" :height="width"
                    title="土坡上的狗尾巴草" subtitle="小咪楂"
                    :outlined="false"
                    :feather="true"
                    :style="{borderRadius: 0}"
          >
            <img
              src="https://m.media-amazon.com/images/M/MV5BZjM3ZGQ4ZTMtOTNjMS00NmJlLTljMWUtNWExMzJhMGJlMWNiXkEyXkFqcGc@._V1_QL75_UY562_CR7,0,380,562_.jpg"
              alt=""/>
          </xy-cover>
        </xy-badge>
      </template>
      <xy-time format="MM月dd日"/>
      <xy-divider direction="vertical" :style="{height: '4.5em'}"/>
      <xy-random-text intro :style="{lineHeight: 1.5}"/>
      <template #footer>
        <xy-qr-code :bordered="false" :padding="1" :size="50" value="测试"/>
      </template>
    </xy-card>
  </div>
</template>

<style scoped lang="scss">

</style>