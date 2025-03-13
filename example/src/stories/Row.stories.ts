import type {ArgTypes, Meta, StoryObj} from "@storybook/vue3";
import {xyCol, xyRow} from "@xuyou-element/components";
import "@xuyou-element/theme/index.scss";

type Story = StoryObj<typeof xyRow> & { argTypes?: ArgTypes }
const meta: Meta<typeof xyRow> = {
  title: "Example/Row",
  component: xyRow,
  subcomponents: {Col: xyCol},
  tags: ["autodocs"],
  argTypes: {
    direction: {
      control: "select",
      options: ["row", "row-reverse"],
    },
    align: {
      control: "select",
      options: ["flex-start", "flex-end", "center"],
    },
    justify: {
      control: "select",
      options: ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"],
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
    content: "Row",
  },
  render: (args) => ({
    components: {xyCol, xyRow},
    setup() {
      return {args};
    },
    template: container(
      `
      <xy-row data-testid="story-test-row" v-bind="args">
        <xy-col :span="3" :offset="2">1</xy-col>
        <xy-col :span="3">2</xy-col>
        <xy-col :span="4">3</xy-col>
        <xy-col :span="6">4</xy-col>
        <xy-col :order="-1">5</xy-col>
      </xy-row>
      `
    ),
  }),
}

export const Responsive: Story = {
  args: {},
  render: (args) => ({
    components: {xyCol, xyRow},
    setup() {
      return {args};
    },
    template: container(
      `
      <xy-row data-testid="story-test-row" v-bind="args">
        <xy-col :responsive="{
          xs: { span: 8, pull: 1 },
          sm: { span: 12, offset: 2 },
          md: { span: 24, hidden: true },
          }"
          style="background: #6c757d; color: white;"
        >Responsive Column</xy-col>
      </xy-row>
      `
    ),
  }),
}

export default meta