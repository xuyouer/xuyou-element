import type {ArgTypes, Meta, StoryObj} from "@storybook/vue3";
import {xyText} from "@xuyou-element/components";
import "@xuyou-element/theme/index.scss";

type Story = StoryObj<typeof xyText> & { argTypes?: ArgTypes }
const meta: Meta<typeof xyText> = {
  title: "Example/Text",
  component: xyText,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: {type: "select"},
      options: ["primary", "success", "warning", "danger", "info", "default"],
    },
    size: {
      control: {type: "select"},
      options: ["large", "default", "small", "tiny"],
    },
    truncated: {
      control: "boolean",
    },
    tag: {
      control: {type: "select"},
      options: ["div", "span", "p", "b", "i", "sub", "sup", "ins", "del", "mark"],
    },
    lineClamp: {
      control: {type: "text"},
    },
    color: {
      control: {type: "color"},
    },
    gradient: {
      control: "color",
    },
    coloured: {
      control: "boolean",
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
    type: "default",
    content: "长颈鹿的脖子那么长，哽咽的时候是不是很难受？",
  },
  render: (args) => ({
    components: {xyText},
    setup() {
      return {args};
    },
    template: container(
      `
      <xy-text data-testid="story-test-text" v-bind="args">{{args.content}}</xy-text>
      `
    ),
  }),
}

export const Color: Story & { args: { content: string } } = {
  argTypes: {
    content: {
      control: {type: "text"},
    },
  },
  args: {
    content: "章鱼有三颗心脏心痛的时候是不是很痛？",
    color: "#ff6a00",
  },
  render: (args) => ({
    components: {xyText},
    setup() {
      return {args};
    },
    template: container(
      `
      <xy-text data-testid="story-test-text" v-bind="args">{{args.content}}</xy-text>
      `
    ),
  }),
}

export const Gradient: Story & { args: { content: string } } = {
  argTypes: {
    content: {
      control: {type: "text"},
    },
  },
  args: {
    content: "乌鸦可以学人说话，尴尬的时候会不会假装咳嗽？",
    gradient: "linear-gradient(to right, #74ebd5 0%, #9face6 100%)",
  },
  render: (args) => ({
    components: {xyText},
    setup() {
      return {args};
    },
    template: container(
      `
      <xy-text data-testid="story-test-text" v-bind="args">{{args.content}}</xy-text>
      `
    ),
  }),
}

export const Coloured: Story & { args: { content: string } } = {
  argTypes: {
    content: {
      control: {type: "text"},
    },
  },
  args: {
    type: "primary",
    content: "骆驼有长长的睫毛，想哭的时候能不能说眼睛进沙了？",
    coloured: true,
  },
  render: (args) => ({
    components: {xyText},
    setup() {
      return {args};
    },
    template: container(
      `
      <xy-text data-testid="story-test-text" v-bind="args">{{args.content}}</xy-text>
      `
    ),
  }),
}

export default meta