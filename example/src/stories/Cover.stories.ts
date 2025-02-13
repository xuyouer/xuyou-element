import type {ArgTypes, Meta, StoryObj} from "@storybook/vue3";
import {xyCover} from "@xuyou-element/components";
import "@xuyou-element/theme/index.scss";

type Story = StoryObj<typeof xyCover> & { argTypes?: ArgTypes }
const meta: Meta<typeof xyCover> = {
  title: "Example/Cover",
  component: xyCover,
  tags: ["autodocs"],
  argTypes: {
    titlePosition: {
      control: "select",
      options: ["top", "top-start", "top-end", "bottom", "bottom-star", "bottom-end", "left", "left-start", "left-end", "right", "right-start", "right-end", "center"],
    }
  },
}

const container = (val: string) => `
<div style="margin:5px">
  ${val}
</div>
`

export const Default: Story = {
  args: {
    title: "Cover",
    subtitle: "小鱼的记忆",
  },
  render: (args) => ({
    components: {xyCover},
    setup() {
      return {args};
    },
    template: container(
      `
      <xy-cover data-testid="story-test-cover" v-bind="args"/>
      `
    ),
  }),
}

export const Slot: Story = {
  args: {
    title: "爱的迫降",
  },
  render: (args) => ({
    components: {xyCover},
    setup() {
      return {args};
    },
    template: container(
      `
      <xy-cover data-testid="story-test-cover" v-bind="args">
        <img src="https://m.media-amazon.com/images/M/MV5BZjM3ZGQ4ZTMtOTNjMS00NmJlLTljMWUtNWExMzJhMGJlMWNiXkEyXkFqcGc@._V1_QL75_UY562_CR7,0,380,562_.jpg" alt="">
      </xy-cover>
      `
    ),
  }),
}

export const Feather: Story = {
  args: {
    title: "泪之女王",
    feather: true,
  },
  render: (args) => ({
    components: {xyCover},
    setup() {
      return {args};
    },
    template: container(
      `
      <xy-cover data-testid="story-test-cover" v-bind="args">
        <img src="https://m.media-amazon.com/images/M/MV5BNWNmYmQ2NzctNTA1NS00NGU2LThjOTQtYTgxNmUyYmNjODYyXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg" alt="">
      </xy-cover>
      `
    ),
  }),
}

export const Mask: Story = {
  args: {
    title: "蓝色大海的传说",
    mask: true,
  },
  render: (args) => ({
    components: {xyCover},
    setup() {
      return {args};
    },
    template: container(
      `
      <xy-cover data-testid="story-test-cover" v-bind="args">
        <img src="https://m.media-amazon.com/images/M/MV5BMDlhOGNhNGQtZTM3Mi00NWJmLTg0ODItZDJkYjExZGMyNjI3XkEyXkFqcGc@._V1_QL75_UY562_CR7,0,380,562_.jpg" alt="">
      </xy-cover>
      `
    ),
  }),
}

export default meta