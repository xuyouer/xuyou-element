<script setup lang="ts">
import {createNamespace} from "@xuyou-element/utils";
import type {PosterProps} from "./types";
import {computed} from "vue";
import {xyBadge} from "../../Badge";
import {xyCard} from "../../Card";
import {xyCover} from "../../Cover";
import {xyDivider} from "../../Divider";
import {xyQrCode} from "../../QrCode";
import {xyRandomText} from "../../RandomText";
import {xyCol, xyRow} from "../../Row";
import {xySpace} from "../../Space";
import {xyNumeral} from "../../Numeral";

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
      <xy-row>
        <xy-col :span="6">
          <xy-space direction="vertical" justifyContent="center" :size="0">
            <xy-numeral :value="new Date().getMonth()+1" suffix="月" format="00"
                        :numeralStyle="{fontSize: '25px', marginRight: '8px', color: '#2f2f2f'}"/>
            /
            <xy-numeral :value="new Date().getDate()" suffix="日" format="00"
                        :numeralStyle="{fontSize: '25px', marginRight: '8px', color: '#2f2f2f', fontWeight: 'bold'}"/>
          </xy-space>
        </xy-col>
        <xy-col :span="2">
          <xy-divider direction="vertical" :style="{height: '4.5em'}"/>
        </xy-col>
        <xy-col :span="16">
          <xy-random-text intro :style="{lineHeight: 1.5}" :textStyle="{color: '#2f2f2f', fontWeight: 'bold'}"/>
        </xy-col>
      </xy-row>
      <template #footer>
        <xy-space justifyContent="space-between">
          <xy-space :block="false" :size="0" direction="vertical" alignItems="flex-start">
            <div>测试</div>
            <div>长按识别获取更多内容</div>
          </xy-space>
          <xy-qr-code :bordered="false" :padding="1" :size="50" value="测试"/>
        </xy-space>
      </template>
    </xy-card>
  </div>
</template>

<style scoped lang="scss">

</style>