import type {ArgTypes, Meta, StoryObj} from "@storybook/vue3";
import {xyTime} from "@xuyou-element/components";
import "@xuyou-element/theme/index.scss";
import {getTimeZoneSupported} from "@xuyou-element/utils";

type Story = StoryObj<typeof xyTime> & { argTypes?: ArgTypes }
const meta: Meta<typeof xyTime> = {
  title: "Example/Time",
  component: xyTime,
  tags: ["autodocs"],
  argTypes: {
    time: {
      control: "date",
    },
    to: {
      control: "date",
    },
    // time: {
    //   control: "number",
    // },
    // to: {
    //   control: "number",
    // },
    format: {
      control: "select",
      options: [
        "yyyy-MM-dd hh:mm:ss"
        , "yyyy-MM-dd hh:mm"
        , "yyyy-MM-dd"
        , "MM-dd"
        , "hh:mm:ss"
        , "hh:mm"
      ],
    },
    timeZone: {
      control: "select",
      options: [...getTimeZoneSupported()],
    },
    type: {
      control: "select",
      options: ["relative", "datetime"],
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
    components: {xyTime},
    setup() {
      return {args};
    },
    template: container(
      `
      <xy-time data-testid="story-test-time" v-bind="args"/>
      `
    ),
  }),
}

export const Type: Story = {
  args: {
    type: "relative",
    time: 1739611020000,
    to: Date.now(),
  },
  render: (args) => ({
    components: {xyTime},
    setup() {
      return {args};
    },
    template: container(
      `
      <xy-time data-testid="story-test-time" v-bind="args"/>
      `
    ),
  }),
}

export const TimeZone: Story = {
  args: {
    timeZone: "America/New_York",
  },
  render: (args) => ({
    components: {xyTime},
    setup() {
      return {args};
    },
    template: container(
      `
      <xy-time data-testid="story-test-time" v-bind="args"/>
      `
    ),
  }),
}

export const Interval: Story = {
  args: {
    format: "yyyy-MM-dd hh:mm",
    interval: 60,
  },
  render: (args) => ({
    components: {xyTime},
    setup() {
      return {args};
    },
    template: container(
      `
      <xy-time data-testid="story-test-time" v-bind="args"/>
      `
    ),
  }),
}

export default meta