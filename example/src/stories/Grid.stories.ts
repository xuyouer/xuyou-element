import type {ArgTypes, Meta, StoryObj} from "@storybook/vue3";
import {xyGrid, xyGridItem} from "@xuyou-element/components";
import "@xuyou-element/theme/index.scss";

type Story = StoryObj<typeof xyGrid> & { argTypes?: ArgTypes }
const meta: Meta<typeof xyGrid> = {
  title: "Example/Grid",
  component: xyGrid,
  subcomponents: {Col: xyGridItem},
  tags: ["autodocs"],
  argTypes: {},
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
    content: "Grid",
  },
  render: (args) => ({
    components: {xyGrid, xyGridItem},
    setup() {
      return {args};
    },
    template: container(
      `
      <xy-grid data-testid="story-test-grid" v-bind="args">
        <xy-grid-item v-for="i in 9" :key="i" :onClick="() => console.log(1)">{{i}}</xy-grid-item>
      </xy-grid>
      `
    ),
  }),
}

export const Padding: Story = {
  args: {
    padding: 10,
  },
  render: (args) => ({
    components: {xyGrid, xyGridItem},
    setup() {
      return {args};
    },
    template: container(
      `
      <xy-grid data-testid="story-test-grid" v-bind="args">
        <xy-grid-item v-for="i in 9" :key="i">{{i}}</xy-grid-item>
      </xy-grid>
      `
    ),
  }),
}

export const Square: Story = {
  args: {
    center: true,
    square: true,
    gap: 10,
  },
  render: (args) => ({
    components: {xyGrid, xyGridItem},
    setup() {
      return {args};
    },
    template: container(
      `
      <xy-grid data-testid="story-test-grid" v-bind="args">
        <xy-grid-item v-for="i in 9" :key="i">{{i}}</xy-grid-item>
      </xy-grid>
      `
    ),
  }),
}

export const ColSpan: Story = {
  args: {
    center: true,
  },
  render: (args) => ({
    components: {xyGrid, xyGridItem},
    setup() {
      return {args};
    },
    template: container(
      `
      <xy-grid data-testid="story-test-grid" v-bind="args">
        <xy-grid-item v-for="i in 8" :key="i" :height="150" :colSpan="i === 4 ? 2 : 1">{{i}}</xy-grid-item>
        <xy-grid-item :colSpan="3" :height="150">9</xy-grid-item>
      </xy-grid>
      `
    ),
  }),
}

export const Order: Story = {
  args: {
    center: true,
  },
  render: (args) => ({
    components: {xyGrid, xyGridItem},
    setup() {
      return {args};
    },
    template: container(
      `
      <xy-grid data-testid="story-test-grid" v-bind="args">
        <xy-grid-item v-for="i in 9" :key="i" :height="150" :order="i === 8 ? -1 : 0">{{i}}</xy-grid-item>
      </xy-grid>
      `
    ),
  }),
}

export default meta