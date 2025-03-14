<script setup>
import { useRouter } from 'vitepress';

const router = useRouter();
const navigateToTarget = (url) => {
  router.go(url);
};
const componentsData = [
  {
    text: 'Basic 基础组件',
    items: [
      { text: 'Button 按钮', link: '/components/Button' },
      { text: 'Icon 图标', link: '/components/Icon' },
      { text: 'Link 链接', link: '/components/Link' },
      { text: 'Text 文本', link: '/components/Text' },
    ],
    collapsed: true,
  },
  {
    text: 'Chart 图表组件',
    items: [
      { text: 'Progress 进度条', link: '/components/Progress' },
    ],
    collapsed: true,
  },
  {
    text: 'Data 数据展示组件',
    items: [
      {text: 'Empty 空状态', link: '/components/Empty'},
      { text: 'Numeral 数值', link: '/components/Numeral' },
      { text: 'RandomText 随机文本', link: '/components/RandomText' },
      { text: 'Time 时间', link: '/components/Time' },
    ],
    collapsed: true,
  },
  {
    text: 'Layout 布局组件',
    items: [
      { text: 'Card 卡片', link: '/components/Card' },
      { text: 'Divider 分割线', link: '/components/Divider' },
      { text: 'Grid 宫格', link: '/components/Grid' },
      { text: 'Row 栅栏', link: '/components/Row' },
      { text: 'Space 间距', link: '/components/Space' },
    ],
    collapsed: true,
  },
  {
    text: 'Navigation 导航组件',
    items: [],
    collapsed: true,
  },
  {
    text: 'View 视图组件',
    items: [
      { text: 'Avatar 头像', link: '/components/Avatar' },
      { text: 'Badge 徽标', link: '/components/Badge' },
      { text: 'BarCode 条形码', link: '/components/BarCode' },
      { text: 'Code 代码', link: '/components/Code' },
      { text: 'Cover 封面', link: '/components/Cover' },
      { text: 'Poster 海报', link: '/components/Poster' },
      { text: 'QrCode 二维码', link: '/components/QrCode' },
    ],
    collapsed: true,
  },
];
</script>

# Overview 组件总览

<div v-for="(category, index) in componentsData" :key="index">
  <div style="margin: 20px 0;">
    <strong style="margin-right: 8px;">{{ category.text }}</strong>
    <xy-badge type="primary"><template v-slot:value>{{ category.items.length }}</template></xy-badge>
  </div>
  <xy-grid :gap="10" :padding="0" square>
    <xy-grid-item :bordered="false" :borderRadius="6" v-for="(item, itemIndex) in category.items" style="cursor: pointer;" :onClick="() => navigateToTarget(`/xuyou-element${item.link}`)">
      <xy-card block style="width: 100%;" :bodyStyle="{alignItems: 'center', justifyContent: 'center'}">
        <template v-slot:header>{{ item.text }}</template>
        <xy-empty :imageSize="80" :imageStyle="{width: 'initial'}"/>
      </xy-card>
    </xy-grid-item>
  </xy-grid>
</div>
