import type {ArgTypes, Meta, StoryObj} from "@storybook/vue3";
import {xyProgress} from "@xuyou-element/components";
import "@xuyou-element/theme/index.scss";

type Story = StoryObj<typeof xyProgress> & { argTypes?: ArgTypes }
const meta: Meta<typeof xyProgress> = {
  title: "Example/Progress",
  component: xyProgress,
  tags: ["autodocs"],
  argTypes: {
    status: {
      control: "select",
      options: ["primary", "success", "warning", "danger", "info", "default"],
    },
    type: {
      control: "select",
      options: ["line", "circle", "dashboard"],
    },
    strokeColor: {
      control: "object",
    },
    lineIndicatorPlacement: {
      control: "select",
      options: ["inside", "outside"],
    },
    lineStrokeBorderRadius: {
      control: "number",
    },
    lineTrailBorderRadius: {
      control: "number",
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
    content: "Progress",
    percent: 10,
  },
  render: (args) => ({
    components: {xyProgress},
    setup() {
      return {args};
    },
    template: container(
      `
      <xy-progress data-testid="story-test-progress" v-bind="args"/>
      `
    ),
  }),
}

export const Line: Story = {
  args: {
    percent: 15,
    status: "primary",
    lineWidth: 300,
    lineHeight: 15,
    lineTrailBorderRadius: 2,
    lineStrokeBorderRadius: 2,
    lineIndicatorPlacement: "outside",
  },
  render: (args) => ({
    components: {xyProgress},
    setup() {
      return {args};
    },
    template: container(
      `
      <xy-progress data-testid="story-test-progress" v-bind="args"/>
      `
    ),
  }),
}

export const Circle: Story = {
  args: {
    status: "primary",
    percent: 55,
    type: "circle",
    strokeColor: {stops: ["#a1c4fd", "#c2e9fb"]},
    strokeWidth: 8,
    trailWidth: 3,
    circleSize: 150,
    circleOffsetDegree: 270,
  },
  render: (args) => ({
    components: {xyProgress},
    setup() {
      return {args};
    },
    template: container(
      `
      <xy-progress data-testid="story-test-progress" v-bind="args"/>
      `
    ),
  }),
}

export const Dashboard: Story = {
  args: {
    percent: 50,
    type: "dashboard",
    strokeColor: {stops: ["#30cfd0", "#330867"]},
  },
  render: (args) => ({
    components: {xyProgress},
    setup() {
      return {args};
    },
    template: container(
      `
      <xy-progress data-testid="story-test-progress" v-bind="args"/>
      `
    ),
  }),
}

export const Processing: Story = {
  args: {
    percent: 99,
    processing: true,
    indicatorTextColor: "#F2F2F2",
  },
  render: (args) => ({
    components: {xyProgress},
    setup() {
      return {args};
    },
    template: container(
      `
      <xy-progress data-testid="story-test-progress" v-bind="args"/>
      `
    ),
  }),
}

export default meta