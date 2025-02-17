import type {ArgTypes, Meta, StoryObj} from "@storybook/vue3";
import {xyAvatar, xyBadge, xyCover, xyIcon} from "@xuyou-element/components";
import "@xuyou-element/theme/index.scss";

type Story = StoryObj<typeof xyBadge> & { argTypes?: ArgTypes }
const meta: Meta<typeof xyBadge> = {
  title: "Example/Badge",
  component: xyBadge,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: {type: "select"},
      options: ["primary", "success", "warning", "danger", "info", "default"],
    },
    value: {
      control: "text",
    },
    max: {
      control: "number",
    },
    dot: {
      control: "boolean",
    },
    hidden: {
      control: "boolean",
    },
    showZero: {
      control: "boolean",
    },
    color: {
      control: "color",
    },
    offset: {
      control: "object",
    },
    corner: {
      control: "boolean",
    },
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
    content: "Badge",
    value: "9",
  },
  render: (args) => ({
    components: {xyAvatar, xyBadge},
    setup() {
      return {args};
    },
    template: container(
      `
      <xy-badge data-testid="story-test-badge" v-bind="args">
        <xy-avatar>{{args.content}}</xy-avatar>
      </xy-badge>
      `
    ),
  }),
}

export const Dot: Story & { args: { content: string } } = {
  argTypes: {
    content: {
      control: {type: "text"},
    },
  },
  args: {
    content: "Badge",
    dot: true,
  },
  render: (args) => ({
    components: {xyAvatar, xyBadge},
    setup() {
      return {args};
    },
    template: container(
      `
      <xy-badge data-testid="story-test-badge" v-bind="args">
        <xy-avatar>{{args.content}}</xy-avatar>
      </xy-badge>
      `
    ),
  }),
}

export const Remark: Story = {
  args: {
    value: "VIP",
    remark: true,
    color: "#ffdf89",
  },
  render: (args) => ({
    components: {xyBadge, xyCover},
    setup() {
      return {args};
    },
    template: container(
      `
      <xy-badge data-testid="story-test-badge" v-bind="args">
        <xy-cover title="继承者们" mask feather>
          <img src="https://m.media-amazon.com/images/M/MV5BZTgwZjZmMGQtMmE0My00YmM1LWJhMTctYTFhY2Q1ZDNjNWUwXkEyXkFqcGc@._V1_QL75_UY562_CR28,0,380,562_.jpg" alt="">
        </xy-cover>
      </xy-badge>
      `
    ),
  }),
}

export const Corner: Story = {
  args: {
    value: "太阳的后裔",
    corner: true,
  },
  render: (args) => ({
    components: {xyBadge, xyCover},
    setup() {
      return {args};
    },
    template: container(
      `
      <xy-badge data-testid="story-test-badge" v-bind="args">
        <xy-cover title="太阳的后裔" mask feather>
          <img src="https://tse3-mm.cn.bing.net/th/id/OIP-C.NlL8LEnjxQKjQcD2kX4YLQHaNK" alt="">
        </xy-cover>
      </xy-badge>
      `
    ),
  }),
}

export const Color: Story = {
  args: {
    value: "孤单又灿烂的神",
    corner: true,
    color: "#C6E7FF",
  },
  render: (args) => ({
    components: {xyBadge, xyCover},
    setup() {
      return {args};
    },
    template: container(
      `
      <xy-badge data-testid="story-test-badge" v-bind="args">
        <xy-cover title="鬼怪" mask feather>
          <img src="https://tse3-mm.cn.bing.net/th/id/OIP-C.0Lf7NiXhd8rb1I6XcnAu2gAAAA" alt="">
        </xy-cover>
      </xy-badge>
      `
    ),
  }),
}

export const Icon: Story & { args: { content: string } } = {
  argTypes: {
    content: {
      control: {type: "text"},
    },
  },
  args: {
    content: "Badge",
  },
  render: (args) => ({
    components: {xyAvatar, xyBadge, xyIcon},
    setup() {
      return {args};
    },
    template: container(
      `
      <xy-badge data-testid="story-test-badge" v-bind="args">
        <template #value>
          <xy-icon :icon="['far', 'face-smile']"/>
        </template>
        <xy-avatar>{{args.content}}</xy-avatar>
      </xy-badge>
      `
    ),
  }),
}

export const Only: Story = {
  args: {
    value: "9",
  },
  render: (args) => ({
    components: {xyBadge},
    setup() {
      return {args};
    },
    template: container(
      `
      <xy-badge data-testid="story-test-badge" v-bind="args"/>
      `
    ),
  }),
}

export const ClassStyle: Story = {
  args: {
    value: "9",
    badgeClass: ["badge1", "badge2"],
    badgeStyle: {
      background: "#ff6a00",
    },
  },
  render: (args) => ({
    components: {xyBadge},
    setup() {
      return {args};
    },
    template: container(
      `
      <xy-badge data-testid="story-test-badge" v-bind="args"/>
      `
    ),
  }),
}

export default meta