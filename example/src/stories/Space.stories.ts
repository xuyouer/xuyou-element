import type {ArgTypes, Meta, StoryObj} from "@storybook/vue3";
import {xyButton, xySpace} from "@xuyou-element/components";
import "@xuyou-element/theme/index.scss";

type Story = StoryObj<typeof xySpace> & { argTypes?: ArgTypes }
const meta: Meta<typeof xySpace> = {
  title: "Example/Space",
  component: xySpace,
  tags: ["autodocs"],
  argTypes: {
    direction: {
      control: "select",
      options: [
        "horizontal"
        , "vertical"
        , "horizontal-reverse"
        , "vertical-reverse"
      ],
    },
    alignItems: {
      control: "select",
      options: [
        "normal"
        , "stretch"
        , "center"
        , "start"
        , "end"
        , "flex-start"
        , "flex-end"
        , "self-start"
        , "self-end"
        , "baseline"
        , "first baseline"
        , "last baseline"
        , "safe center"
        , "unsafe center"
        , "inherit"
        , "initial"
        , "revert"
        , "revert-layer"
        , "unset"
      ],
    },
    justifyContent: {
      control: "select",
      options: [
        "center"
        , "start"
        , "end"
        , "flex-start"
        , "flex-end"
        , "left"
        , "right"
        , "baseline"
        , "first baseline"
        , "last baseline"
        , "space-between"
        , "space-around"
        , "space-evenly"
        , "stretch"
        , "safe center"
        , "unsafe center"
        , "inherit"
        , "initial"
        , "unset"
      ],
    },
    size: {
      control: "select",
      options: [
        "large"
        , "default"
        , "small"
        , "tiny"
      ],
    },
    overflow: {
      control: "select",
      options: [
        "visible"
        , "hidden"
        , "clip"
        , "scroll"
        , "auto"
        , "hidden visible"
        , "inherit"
        , "initial"
        , "revert"
        , "revert-layer"
        , "unset"
      ],
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
    content: "Space",
  },
  render: (args) => ({
    components: {xyButton, xySpace},
    setup() {
      return {args};
    },
    template: container(
      `
      <xy-space data-testid="story-test-space" v-bind="args">
        <xy-button>{{args.content}}1</xy-button>
        <xy-button>{{args.content}}2</xy-button>
      </xy-space>
      `
    ),
  }),
}

export const Block: Story & { args: { content: string } } = {
  argTypes: {
    content: {
      control: {type: "text"},
    },
  },
  args: {
    content: "Space",
    spaceStyle: {
      background: "#fa5151",
      padding: "10px",
      borderRadius: "6px",
    },
  },
  render: (args) => ({
    components: {xyButton, xySpace},
    setup() {
      return {args};
    },
    template: container(
      `
      <xy-space direction="vertical" align-items="flex-start">
        <xy-space v-bind="args">
          <xy-button>{{args.content}}3</xy-button>
          <xy-button>{{args.content}}4</xy-button>
        </xy-space>
        <xy-space v-bind="args" :block="false" :style="{background: '#ee6eb3'}">
          <xy-button>{{args.content}}1</xy-button>
          <xy-button>{{args.content}}2</xy-button>
        </xy-space>
      </xy-space>
      `
    ),
  }),
}

export const Direction: Story & { args: { content: string } } = {
  argTypes: {
    content: {
      control: {type: "text"},
    },
  },
  args: {
    content: "Space",
    direction: "vertical",
    alignItems: "flex-start",
  },
  render: (args) => ({
    components: {xyButton, xySpace},
    setup() {
      return {args};
    },
    template: container(
      `
      <xy-space data-testid="story-test-space" v-bind="args">
        <xy-button>{{args.content}}1</xy-button>
        <xy-button>{{args.content}}2</xy-button>
      </xy-space>
      `
    ),
  }),
}

export const Size: Story & { args: { content: string } } = {
  argTypes: {
    content: {
      control: {type: "text"},
    },
  },
  args: {
    content: "Space",
    size: 50,
  },
  render: (args) => ({
    components: {xyButton, xySpace},
    setup() {
      return {args};
    },
    template: container(
      `
      <xy-space data-testid="story-test-space" v-bind="args">
        <xy-button>{{args.content}}1</xy-button>
        <xy-button>{{args.content}}2</xy-button>
      </xy-space>
      `
    ),
  }),
}

export default meta