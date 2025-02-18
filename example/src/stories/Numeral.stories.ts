import type {ArgTypes, Meta, StoryObj} from "@storybook/vue3";
import {xyNumeral} from "@xuyou-element/components";
import "@xuyou-element/theme/index.scss";

type Story = StoryObj<typeof xyNumeral> & { argTypes?: ArgTypes }
const meta: Meta<typeof xyNumeral> = {
  title: "Example/Numeral",
  component: xyNumeral,
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: "number",
    },
    format: {
      control: "select",
      options: [
        "0.0"
        , "0.0[0000]"
        , "0.00"
        , "0,0.00"
        , ".0"
        , ".00"
        , "0a"
        , "0.0a"
        , "0.00a"
        , "0b"
        , "0.0b"
        , "0.00b"
        , "0.0ib"
        , "0.00ib"
        , "0%"
        , "0.00%"
        , "00:00:00"
      ],
    },
    prefix: {
      control: "text",
    },
    suffix: {
      control: "text",
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
    content: "Numeral",
    value: 1999.99,
  },
  render: (args) => ({
    components: {xyNumeral},
    setup() {
      return {args};
    },
    template: container(
      `
      <xy-numeral data-testid="story-test-numeral" v-bind="args"/>
      `
    ),
  }),
}

export const Prefix: Story = {
  args: {
    value: 1999.99,
    prefix: "￥",
    numeralStyle: {
      color: "#c87d2f",
    },
    upperStyle: {
      color: "#ea3a3a",
      fontSize: "20px",
    },
  },
  render: (args) => ({
    components: {xyNumeral},
    setup() {
      return {args};
    },
    template: container(
      `
      <xy-numeral data-testid="story-test-numeral" v-bind="args"/>
      `
    ),
  }),
}

export const Format: Story = {
  args: {
    value: 1999.99,
    format: "0a",
  },
  render: (args) => ({
    components: {xyNumeral},
    setup() {
      return {args};
    },
    template: container(
      `
      <xy-numeral data-testid="story-test-numeral" v-bind="args"/>
      `
    ),
  }),
}

export const Chinese: Story = {
  args: {
    value: 1999.99,
    chinese: true,
  },
  render: (args) => ({
    components: {xyNumeral},
    setup() {
      return {args};
    },
    template: container(
      `
      <xy-numeral data-testid="story-test-numeral" v-bind="args"/>
      `
    ),
  }),
}

export default meta