import type {ArgTypes, Meta, StoryObj} from "@storybook/vue3";
import {xyLink} from "@xuyou-element/components";
import "@xuyou-element/theme/index.scss";

type Story = StoryObj<typeof xyLink> & { argTypes?: ArgTypes }
const meta: Meta<typeof xyLink> = {
  title: "Example/Link",
  component: xyLink,
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
    underline: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    href: {
      control: {type: "text"},
    },
    title: {
      control: {type: "text"},
    },
    target: {
      control: {type: "select"},
      options: ["_blank", "_parent", "_self", "_top"],
    },
    icon: {
      control: {type: "text"},
    },
    color: {
      control: {type: "color"},
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
    content: "Link",
  },
  render: (args) => ({
    components: {xyLink},
    setup() {
      return {args};
    },
    template: container(
      `
      <xy-link data-testid="story-test-link" v-bind="args">{{args.content}}</xy-link>
      `
    ),
  }),
}

export const Disabled: Story & { args: { content: string } } = {
  argTypes: {
    content: {
      control: {type: "text"},
    },
  },
  args: {
    content: "Link",
    disabled: true,
  },
  render: (args) => ({
    components: {xyLink},
    setup() {
      return {args};
    },
    template: container(
      `
      <xy-link data-testid="story-test-link" v-bind="args">{{args.content}}</xy-link>
      `
    ),
  }),
}

export const Icon: Story & { args: { content: string } } = {
  argTypes: {
    content: {
      control: {type: "text"},
    },
  },
  args: {
    type: "primary",
    content: "蝙蝠的耳朵儿",
    icon: ["fab", "waze"],
  },
  render: (args) => ({
    components: {xyLink},
    setup() {
      return {args};
    },
    template: container(
      `
      <xy-link data-testid="story-test-link" v-bind="args">{{args.content}}</xy-link>
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
    content: "章鱼的心脏",
    color: "#FF748B",
  },
  render: (args) => ({
    components: {xyLink},
    setup() {
      return {args};
    },
    template: container(
      `
      <xy-link data-testid="story-test-link" v-bind="args">{{args.content}}</xy-link>
      `
    ),
  }),
}

export default meta