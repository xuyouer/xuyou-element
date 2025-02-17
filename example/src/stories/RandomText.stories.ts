import type {ArgTypes, Meta, StoryObj} from "@storybook/vue3";
import {xyRandomText} from "@xuyou-element/components";
import "@xuyou-element/theme/index.scss";

type Story = StoryObj<typeof xyRandomText> & { argTypes?: ArgTypes }
const meta: Meta<typeof xyRandomText> = {
  title: "Example/RandomText",
  component: xyRandomText,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["all", "poetry"],
    },
    renderType: {
      control: "select",
      options: ["text", "svg"],
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
    content: "RandomText",
  },
  render: (args) => ({
    components: {xyRandomText},
    setup() {
      return {args};
    },
    template: container(
      `
      <xy-random-text data-testid="story-test-random-text" v-bind="args"/>
      `
    ),
  }),
}

export const Type: Story = {
  args: {
    type: "all",
  },
  render: (args) => ({
    components: {xyRandomText},
    setup() {
      return {args};
    },
    template: container(
      `
      <xy-random-text data-testid="story-test-random-text" v-bind="args"/>
      `
    ),
  }),
}

export const RenderType: Story = {
  args: {
    renderType: "svg",
  },
  render: (args) => ({
    components: {xyRandomText},
    setup() {
      return {args};
    },
    template: container(
      `
      <xy-random-text data-testid="story-test-random-text" v-bind="args"/>
      `
    ),
  }),
}

export const Block: Story = {
  args: {
    block: true,
  },
  render: (args) => ({
    components: {xyRandomText},
    setup() {
      return {args};
    },
    template: container(
      `
      <xy-random-text data-testid="story-test-random-text" v-bind="args"/>
      `
    ),
  }),
}

export const Intro: Story = {
  args: {
    intro: true,
  },
  render: (args) => ({
    components: {xyRandomText},
    setup() {
      return {args};
    },
    template: container(
      `
      <xy-random-text data-testid="story-test-random-text" v-bind="args"/>
      `
    ),
  }),
}

export default meta