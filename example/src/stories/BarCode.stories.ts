import type {ArgTypes, Meta, StoryObj} from "@storybook/vue3";
import {xyBarCode} from "@xuyou-element/components";
import "@xuyou-element/theme/index.scss";

type Story = StoryObj<typeof xyBarCode> & { argTypes?: ArgTypes }
const meta: Meta<typeof xyBarCode> = {
  title: "Example/BarCode",
  component: xyBarCode,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["default", "addon"],
    },
    renderType: {
      control: "select",
      options: ["canvas", "svg"],
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
    content: "BarCode",
    value: "8247591036842",
  },
  render: (args) => ({
    components: {xyBarCode},
    setup() {
      return {args};
    },
    template: container(
      `
      <xy-bar-code data-testid="story-test-bar-code" v-bind="args"/>
      `
    ),
  }),
}

export const RenderType: Story = {
  args: {
    value: "123456789012345",
    renderType: "svg",
  },
  render: (args) => ({
    components: {xyBarCode},
    setup() {
      return {args};
    },
    template: container(
      `
      <xy-bar-code data-testid="story-test-bar-code" v-bind="args"/>
      `
    ),
  }),
}

export const Addon: Story = {
  args: {
    value: "1234567890128",
    addonValue: "12345",
    type: "addon",
    renderType: "svg",
    eanOptions: {
      fontSize: 18,
      textMargin: 0,
    },
    addonOptions: {
      height: 85,
      textPosition: "top",
      fontSize: 16,
      marginTop: 15,
    },
  },
  render: (args) => ({
    components: {xyBarCode},
    setup() {
      return {args};
    },
    template: container(
      `
      <xy-bar-code data-testid="story-test-bar-code" v-bind="args"/>
      `
    ),
  }),
}

export default meta