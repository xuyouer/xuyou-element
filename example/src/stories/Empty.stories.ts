import type {ArgTypes, Meta, StoryObj} from "@storybook/vue3";
import {xyEmpty} from "@xuyou-element/components";
import "@xuyou-element/theme/index.scss";

type Story = StoryObj<typeof xyEmpty> & { argTypes?: ArgTypes }
const meta: Meta<typeof xyEmpty> = {
  title: "Example/Empty",
  component: xyEmpty,
  tags: ["autodocs"],
  argTypes: {
    imageSize: {
      control: "select",
      options: ["large", "default", "small", "tiny"],
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
    content: "Empty",
  },
  render: (args) => ({
    components: {xyEmpty},
    setup() {
      return {args};
    },
    template: container(
      `
      <xy-empty data-testid="story-test-empty" v-bind="args"/>
      `
    ),
  }),
}

export const Icon: Story = {
  args: {
    showImage: false,
    showIcon: true,
  },
  render: (args) => ({
    components: {xyEmpty},
    setup() {
      return {args};
    },
    template: container(
      `
      <xy-empty data-testid="story-test-empty" v-bind="args"/>
      `
    ),
  }),
}

export const Extra: Story = {
  args: {
    showExtra: true,
    extra: "刷新页面",
    onClick: () => {
      window.location.reload()
    },
  },
  render: (args) => ({
    components: {xyEmpty},
    setup() {
      return {args};
    },
    template: container(
      `
      <xy-empty data-testid="story-test-empty" v-bind="args"/>
      `
    ),
  }),
}

export default meta