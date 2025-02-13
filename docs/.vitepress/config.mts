import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "XuYou-Element",
  description: "xuyou-element",
  base: "/xuyou-element/",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {text: '指南', link: '/guide/installation', activeMatch: '/guide/'},
      {text: '组件', link: '/components/button', activeMatch: '/components/'},
      {text: '资源', link: '/resource/', activeMatch: '/resource/'},
      {text: '主站', link: 'https://xiaomizha.ltd/'},
    ],

    sidebar: {
      '/guide/': [
        {
          text: '基础',
          items: [
            {text: '安装', link: '/guide/installation'},
            {text: '快速开始', link: '/guide/quickstart'},
          ]
        },
        {
          text: '版本',
          items: [
            {text: '变更日志', link: '/guide/changelog'},
          ]
        }
      ],
      '/components/': [
        {
          text: 'Basic 基础组件',
          items: [
            {text: 'Button 按钮', link: '/components/button'},
            {text: 'Icon 图标', link: '/components/icon'},
          ]
        },
      ],
    },

    socialLinks: [
      {icon: 'github', link: 'https://github.com/xuyouer/xuyou-element/'}
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present xuyou, xiaomizha'
    },

    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: '编辑此页面'
    },

    lastUpdated: {
      text: '最后更新时间',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    search: {
      provider: 'local'
    },

    outline: {
      label: 'CONTENTS'
    },
  }
})