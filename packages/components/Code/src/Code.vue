<script setup lang="ts">
import {createNamespace, getElementScrollHeight, getPrettierParser} from "@xuyou-element/utils";
import {computed, ref} from "vue";
import type {CodeEmits, CodeProps} from "./types";
import {xyButton, xyButtonGroup} from "../../Button";
import * as prettier from "prettier";
import pluginHtml from "prettier/plugins/html";
import pluginBabel from "prettier/plugins/babel";
import pluginPostCss from "prettier/plugins/postcss";
import pluginMarkdown from "prettier/plugins/markdown";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";

defineOptions({
  name: "xyCode",
})
const bem = createNamespace("code")
const props = withDefaults(defineProps<CodeProps>(), {
  showcase: true,
  showLineNumbers: true,
  format: true,
  wrap: true,
  gridlines: false,
  theme: "light",
  showEditButton: true,
  showCopyButton: true,
  showCollapseButton: true,
  collapsed: true,
})
const emits = defineEmits<CodeEmits>()
const slots = defineSlots()
const codeStyles = computed(() => {
  return {}
})
const code = ref("")
const formattedCode = async () => {
  const parser = await getPrettierParser(props?.language)
  const options: prettier.Options = {
    parser,
    plugins: [pluginHtml, pluginBabel, pluginPostCss, pluginMarkdown],
    singleQuote: true, // 使用单引号
    semi: true, // 使用分号
    jsxSingleQuote: false, // JSX 中使用双引号
    trailingComma: 'none', // 数组和对象中尾随逗号
    bracketSpacing: true, // 在对象字面量的括号之间添加空格
    arrowParens: 'always', // 箭头函数括号
    endOfLine: 'auto', // 结尾自动换行
    // printWidth: 80, // 每行最大宽度
    tabWidth: 2, // 缩进
    useTabs: false, // 制表符缩进
  }
  code.value = await prettier.format(props?.code || "", options)
}
const splitCode = computed(() => {
  if (!props?.code && !props?.format) return []
  if (props?.format) {
    try {
      formattedCode()
      return code.value.split("\n").slice(0, -1) ?? []
    } catch (error) {
      return props?.code?.split("\n") ?? []
    }
  }
  return props?.code?.split("\n") ?? []
})
const highlightCode = computed(() => {
  try {
    return hljs.highlightAuto(props?.code || "").value
  } catch (error) {
    return props?.code || ""
  }
})
const showcasePreCode = ref<HTMLElement | null>(null)
const preCodeHeight = computed(() => showcasePreCode?.value ? getElementScrollHeight(showcasePreCode?.value) > 200 : false)
const showcased = ref(false)
const togglePrev = () => {
  showcased.value = !showcased.value
}
const buttons = computed(() => {
  const defaultButtons = [
    ...(props?.showEditButton
      ? [{icon: ['fab', 'github'], plain: props?.theme !== 'dark'}]
      : []),
    ...(props?.showEditButton
      ? [{icon: ['fas', 'pen-to-square'], plain: props?.theme !== 'dark'}]
      : []),
    ...(props?.showCopyButton
      ? [{icon: ['far', 'copy'], plain: props?.theme !== 'dark', onClick: handleCopy}]
      : []),
    ...(props?.showCollapseButton
      ? [{icon: ['fas', 'code'], plain: props?.theme !== 'dark', onClick: handleCollapse}]
      : []),
  ]
  const customButtons = props?.buttons?.map((button) => ({
    icon: button?.icon,
    onClick: button?.onClick || (() => {
    }),
    plain: props.theme !== 'dark',
  })) || []
  return [...customButtons, ...defaultButtons]
})
const handleCopy = () => {
  navigator.clipboard.writeText(props?.code || '')
}
const isCollapsed = ref(props?.collapsed)
const handleCollapse = () => {
  isCollapsed.value = !isCollapsed.value
  emits('update:collapsed', isCollapsed.value)
}
</script>

<template>
  <div
    :class="{
      [bem.b()]: true,
      [bem.m(theme)]: theme,
    }"
    :style="codeStyles"
  >
    <div
      v-if="showcase"
      :class="[bem.b('showcase'), bem.bm('showcase', theme)]"
    >
      <pre :class="[bem.b('showcasePre'), bem.is('showcased', showcased)]">
        <code
          :class="[bem.b('showcasePreCode'), bem.is('wrap', wrap)]"
          v-html="highlightCode"
          ref="showcasePreCode"
        />
      </pre>
      <div
        v-if="preCodeHeight"
        :class="bem.b('showcaseBtn')"
        @click="togglePrev"
      >
        <xy-button
          size="tiny"
          text
          :icon="showcased ? 'caret-up': 'caret-down'"
          tag="div"
          :color="theme === 'dark' ? '#343a40' : void 0"
        />
      </div>
    </div>

    <div :class="[bem.b('options'), bem.bm('options', theme)]">
      <xy-button-group
        size="small"
      >
        <xy-button
          v-for="button in buttons" :key="button.icon[1]"
          :plain="button.plain"
          :icon="button.icon"
          @click="button.onClick"
        />
      </xy-button-group>
    </div>

    <div
      v-show="!isCollapsed"
      :class="[bem.b('source'), bem.bm('source', theme)]"
    >
      <div :class="bem.b('lang')">{{ language }}</div>
      <pre :class="bem.b('pre')">
        <code :class="bem.b('preCode')">
          <!--<slot name="code">{{ formattedCode }}</slot>-->
          <div :class="[bem.b('preCodeItem'), bem.is('gridlines', gridlines), bem.is('wrap', wrap)]">
            <div :class="bem.b('preCodeItemList')" v-for="(n, i) in splitCode" :key="i">
              <div :class="bem.b('preCodeItemListNumbers')" v-if="showLineNumbers">{{ i + 1 }}</div>
              <!--<div :class="[bem.b('preCodeItemListCode'), bem.is('wrap', wrap)]">{{ n }}</div>-->
              <div :class="[bem.b('preCodeItemListCode'), bem.is('wrap', wrap)]" v-html="hljs.highlightAuto(n).value"/>
            </div>
          </div>
        </code>
      </pre>
    </div>

    <div
      v-show="!isCollapsed"
      v-if="showCollapseButton"
      :class="[bem.b('collapse'), bem.bm('collapse', theme)]"
      @click="handleCollapse"
    >
      <xy-button
        size="tiny"
        text
        icon="caret-up"
        tag="div"
        :color="theme === 'dark' ? '#343a40' : void 0"
      >
        隐藏源代码
      </xy-button>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>