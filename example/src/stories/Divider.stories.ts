import type {ArgTypes, Meta, StoryObj} from "@storybook/vue3";
import {xyDivider, xyText} from "@xuyou-element/components";
import "@xuyou-element/theme/index.scss";

type Story = StoryObj<typeof xyDivider> & { argTypes?: ArgTypes }
const meta: Meta<typeof xyDivider> = {
  title: "Example/Divider",
  component: xyDivider,
  tags: ["autodocs"],
  argTypes: {
    borderStyle: {
      control: "select",
      options: ["none", "hidden", "dotted", "dashed", "solid", "double", "groove", "ridge", "inset", "outset"],
    },
    direction: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
    contentPosition: {
      control: "select",
      options: ["left", "right", "center"],
    },
  },
}

const container = (val: string) => `
<div style="margin:5px">
  ${val}
</div>
`

export const Default: Story = {
  args: {},
  render: (args) => ({
    components: {xyDivider, xyText},
    setup() {
      return {args};
    },
    template: container(
      `
      <xy-text type="info">鱼的记忆只有七秒</xy-text>
      <xy-divider data-testid="story-test-divider" v-bind="args"/>
      <xy-text type="primary">长颈鹿的脖子</xy-text>
      `
    ),
  }),
}

export const Content: Story & { args: { content: string } } = {
  argTypes: {
    content: {
      control: {type: "text"},
    },
  },
  args: {
    content: "Divider",
  },
  render: (args) => ({
    components: {xyDivider, xyText},
    setup() {
      return {args};
    },
    template: container(
      `
      <xy-divider data-testid="story-test-divider" v-bind="args">
        <xy-text type="primary">{{args.content}}</xy-text>
      </xy-divider>
      `
    ),
  }),
}

export const BorderStyle: Story & { args: { content: string } } = {
  argTypes: {
    content: {
      control: {type: "text"},
    },
  },
  args: {
    content: "Divider",
    contentPosition: "left",
    borderStyle: "dashed",
  },
  render: (args) => ({
    components: {xyDivider},
    setup() {
      return {args};
    },
    template: container(
      `
      <xy-divider data-testid="story-test-divider" v-bind="args">{{args.content}}</xy-divider>
      `
    ),
  }),
}

export const ContentPosition: Story & { args: { content: string } } = {
  argTypes: {
    content: {
      control: {type: "text"},
    },
  },
  args: {
    content: "Divider",
    contentPosition: "right",
  },
  render: (args) => ({
    components: {xyDivider},
    setup() {
      return {args};
    },
    template: container(
      `
      <xy-divider data-testid="story-test-divider" v-bind="args">{{args.content}}</xy-divider>
      `
    ),
  }),
}

export const Direction: Story = {
  args: {
    direction: "vertical",
  },
  render: (args) => ({
    components: {xyDivider, xyText},
    setup() {
      return {args};
    },
    template: container(
      `
      <xy-text type="primary">长颈鹿的脖子</xy-text>
      <xy-divider data-testid="story-test-divider" v-bind="args"/>
      <xy-text type="success">小鱼的记忆</xy-text>
      <xy-divider data-testid="story-test-divider" v-bind="args"/>
      <xy-text type="danger">鸟儿的小手</xy-text>
      `
    ),
  }),
}

export default meta