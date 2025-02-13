import type {ArgTypes, Meta, StoryObj} from "@storybook/vue3";
import {xyAvatar, xyAvatarGroup} from "@xuyou-element/components";
import "@xuyou-element/theme/index.scss";

type Story = StoryObj<typeof xyAvatar> & { argTypes?: ArgTypes }
const meta: Meta<typeof xyAvatar> = {
  title: "Example/Avatar",
  component: xyAvatar,
  subcomponents: {AvatarGroup: xyAvatarGroup},
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
    fit: {
      control: {type: "select"},
      options: ["fill", "contain", "cover", "none", "scale-down"],
    },
    shape: {
      control: {type: "select"},
      options: ["circle", "square", "default"],
    },
    src: {
      control: {type: "text"},
    },
    srcSet: {
      control: {type: "text"},
    },
    alt: {
      control: {type: "text"},
    },
    icon: {
      control: {type: "text"},
    },
    color: {
      control: {type: "color"},
    },
    bordered: {
      control: "boolean",
    },
    placeholder: {
      control: "boolean",
    }
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
    content: "Avatar",
  },
  render: (args) => ({
    components: {xyAvatar},
    setup() {
      return {args};
    },
    template: container(
      `
      <xy-avatar data-testid="story-test-avatar" v-bind="args">{{args.content}}</xy-avatar>
      `
    ),
  }),
}

export const Img: Story = {
  args: {
    src: "https://poc-cf-image.cjenm.com/resize/280x64/public/share/systemmng/site/gnbmng/tvn_logo_230313.png",
    srcSet: "",
    alt: "Avatar",
    fit: "cover",
  },
  render: (args) => ({
    components: {xyAvatar},
    setup() {
      return {args};
    },
    template: container(
      `
      <xy-avatar data-testid="story-test-avatar" v-bind="args"/>
      `
    ),
  }),
}

export const Icon: Story = {
  args: {
    icon: "spa",
    color: "#ee6eb3",
    type: "primary",
  },
  render: (args) => ({
    components: {xyAvatar},
    setup() {
      return {args};
    },
    template: container(
      `
      <xy-avatar data-testid="story-test-avatar" v-bind="args"/>
      `
    ),
  }),
}

export const Group: Story & { args: { content1: string, content2: string } } = {
  argTypes: {
    groupType: {
      control: "select",
      options: ["primary", "success", "warning", "danger", "info", "default"]
    },
    groupSize: {
      control: "select",
      options: ["large", "default", "small", "tiny"],
    },
    groupShape: {
      control: "select",
      options: ["circle", "square", "default"],
    },
    groupMax: {
      control: "number",
    },
    groupSpacing: {
      control: "number",
    },
    groupDirection: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
    groupOverflow: {
      control: "select",
      options: ["hidden", "visible", "number"],
    },
    content1: {
      control: "text",
    },
    content2: {
      control: "text",
    },
  },
  args: {
    content1: "Avatar1",
    content2: "Avatar2",
  },
  render: (args) => ({
    components: {xyAvatar, xyAvatarGroup},
    setup() {
      return {args};
    },
    template: container(
      `
      <xy-avatar-group data-testid="story-test-avatar-group" :type="args.groupType" :size="args.groupSize" :shape="args.groupShape" :max="args.groupMax" :spacing="args.groupSpacing" :direction="args.groupDirection" :overflow="args.groupOverflow">
        <xy-avatar v-bind="args">{{args.content1}}</xy-avatar>
        <xy-avatar v-bind="args">{{args.content2}}</xy-avatar>
        <xy-avatar v-bind="args">{{args.content1}}</xy-avatar>
        <xy-avatar v-bind="args">{{args.content2}}</xy-avatar>
        <xy-avatar v-bind="args">{{args.content1}}</xy-avatar>
        <xy-avatar v-bind="args">{{args.content2}}</xy-avatar>
        <xy-avatar v-bind="args">{{args.content1}}</xy-avatar>
        <xy-avatar v-bind="args">{{args.content2}}</xy-avatar>
      </xy-avatar-group>
      `
    ),
  }),
}

export default meta