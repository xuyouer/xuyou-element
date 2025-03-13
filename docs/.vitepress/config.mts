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
      {text: '组件', link: '/components/Button', activeMatch: '/components/'},
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
            {text: 'Button 按钮', link: '/components/Button'},
            {text: 'Icon 图标', link: '/components/Icon'},
            {text: 'Link 链接', link: '/components/Link'},
            {text: 'Text 文本', link: '/components/Text'},
          ]
        },
        {
          text: 'Chart 图表组件',
          items: [
            {text: 'Progress 进度条', link: '/components/Progress'},
          ]
        },
        {
          text: 'Data 数据展示组件',
          items: [
            {text: 'Numeral 数值', link: '/components/Numeral'},
            {text: 'RandomText 随机文本', link: '/components/RandomText'},
            {text: 'Time 时间', link: '/components/Time'},
          ]
        },
        {
          text: 'Layout 布局组件',
          items: [
            {text: 'Card 卡片', link: '/components/Card'},
            {text: 'Divider 分割线', link: '/components/Divider'},
            {text: 'Row 栅栏', link: '/components/Row'},
            {text: 'Space 间距', link: '/components/Space'},
          ]
        },
        {
          text: 'Navigation 导航组件',
          items: []
        },
        {
          text: 'View 视图组件',
          items: [
            {text: 'Avatar 头像', link: '/components/Avatar'},
            {text: 'Badge 徽标', link: '/components/Badge'},
            {text: 'BarCode 条形码', link: '/components/BarCode'},
            {text: 'Code 代码', link: '/components/Code'},
            {text: 'Cover 封面', link: '/components/Cover'},
            {text: 'Poster 海报', link: '/components/Poster'},
            {text: 'QrCode 二维码', link: '/components/QrCode'},
          ]
        },
      ],
    },

    socialLinks: [
      {icon: 'github', link: 'https://github.com/xuyouer/xuyou-element/'}
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: '© 2020-2025 xuyou, xiaomizha., Ltd. All rights reserved.'
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