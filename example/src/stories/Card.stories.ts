import type {ArgTypes, Meta, StoryObj} from "@storybook/vue3";
import {xyCard, xyCover} from "@xuyou-element/components";
import "@xuyou-element/theme/index.scss";

type Story = StoryObj<typeof xyCard> & { argTypes?: ArgTypes }
const meta: Meta<typeof xyCard> = {
  title: "Example/Card",
  component: xyCard,
  tags: ["autodocs"],
  argTypes: {
    shadow: {
      control: "select",
      options: ["never", "hover", "always"],
    }
  },
}

const container = (val: string) => `
<div style="margin:5px">
  ${val}
</div>
`

export const Default: Story & { args: { content: string } } = {
  argTypes: {
    content: {
      control: {type: "text"},
    },
  },
  args: {
    content: "长颈鹿的脖子",
    header: "Card",
    footer: "小鱼的记忆",
  },
  render: (args) => ({
    components: {xyCard},
    setup() {
      return {args};
    },
    template: container(
      `
      <xy-card data-testid="story-test-card" v-bind="args" style="width: 500px;">{{args.content}}</xy-card>
      `
    ),
  }),
}

export const Block: Story & { args: { content: string } } = {
  argTypes: {
    content: {
      control: {type: "text"},
    },
  },
  args: {
    content: "小鱼的记忆",
    header: "Card",
    footer: "蝙蝠的耳朵",
    block: true,
  },
  render: (args) => ({
    components: {xyCard},
    setup() {
      return {args};
    },
    template: container(
      `
      <xy-card data-testid="story-test-card" v-bind="args">{{args.content}}</xy-card>
      `
    ),
  }),
}

export const Shadow: Story = {
  args: {},
  render: (args) => ({
    components: {xyCard},
    setup() {
      return {args};
    },
    template: container(
      `
      <xy-card data-testid="story-test-card" v-bind="args" style="width: 500px;">Never</xy-card>
      <br>
      <br>
      <xy-card data-testid="story-test-card" v-bind="args" shadow="hover" style="width: 500px;">Hover</xy-card>
      <br>
      <br>
      <xy-card data-testid="story-test-card" v-bind="args" shadow="always" style="width: 500px;">Always</xy-card>
      `
    ),
  }),
}

export const ContentShadow: Story = {
  args: {
    contentShadow: true,
    bordered: false,
  },
  render: (args) => ({
    components: {xyCard, xyCover},
    setup() {
      return {args};
    },
    template: container(
      `
      <xy-card data-testid="story-test-card" v-bind="args">
        <xy-cover title="妈妈朋友的儿子" feather>
          <img src="https://m.media-amazon.com/images/M/MV5BZDg2M2Y4NWQtMGY3NS00ODE3LWFmMWEtYjgyZjVjZmU0YTU5XkEyXkFqcGc@._V1_QL75_UY562_CR7,0,380,562_.jpg" alt="">
        </xy-cover>
      </xy-card>
      `
    ),
  }),
}

export const Bordered: Story & { args: { content: string } } = {
  argTypes: {
    content: {
      control: {type: "text"},
    },
  },
  args: {
    content: "长颈鹿的脖子那么长，哽咽的时候是不是很难受？",
    header: "Card",
    bordered: false,
    color: "#fafafc",
  },
  render: (args) => ({
    components: {xyCard},
    setup() {
      return {args};
    },
    template: container(
      `
      <xy-card data-testid="story-test-card" v-bind="args">{{args.content}}</xy-card>
      `
    ),
  }),
}

export const Closable: Story & { args: { content: string } } = {
  argTypes: {
    content: {
      control: {type: "text"},
    },
  },
  args: {
    content: "鱼的记忆只有七秒，在下一个七秒他们还会不会相遇？",
    header: "Card",
    closable: true,
    color: "#111",
  },
  render: (args) => ({
    components: {xyCard},
    setup() {
      return {args};
    },
    template: container(
      `
      <xy-card data-testid="story-test-card" v-bind="args" @close="console.log('卡片被关闭了')">{{args.content}}</xy-card>
      `
    ),
  }),
}

export default meta