import type {Meta, StoryObj, ArgTypes} from "@storybook/vue3";
import {fn, within, userEvent, expect, clearAllMocks} from "@storybook/test"
import {set} from "lodash-es";
import {xyButton, xyButtonGroup} from "@xuyou-element/components"
import "@xuyou-element/theme/index.scss";
import {Story} from "@storybook/blocks";

type Story = StoryObj<typeof xyButton> & { argTypes?: ArgTypes }
const meta: Meta<typeof xyButton> = {
  title: "Example/Button",
  component: xyButton,
  subcomponents: {ButtonGroup: xyButtonGroup},
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
    disabled: {
      control: "boolean",
    },
    loading: {
      control: "boolean",
    },
    useThrottle: {
      control: "boolean",
    },
    throttleDuration: {
      control: "number",
    },
    autofocus: {
      control: "boolean",
    },
    tag: {
      control: {type: "select"},
      options: ["button", "a", "div"],
    },
    nativeType: {
      control: {type: "select"},
      options: ["button", "submit", "reset", ""],
    },
    icon: {
      control: {type: "text"},
    },
    loadingIcon: {
      control: {type: "text"},
    },
    text: {
      control: "boolean",
    },
    textBg: {
      control: "boolean",
    },
    round: {
      control: "boolean",
    },
    circle: {
      control: "boolean",
    },
    dashed: {
      control: "boolean",
    },
    strong: {
      control: "boolean",
    },
    autoInsertSpace: {
      control: "boolean",
    },
    color: {
      control: {type: "color"},
    },
    textColor: {
      control: {type: "color"},
    },
  },
  args: {onClick: fn()},
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
    content: "Button",
  },
  render: (args) => ({
    components: {xyButton},
    setup() {
      return {args};
    },
    template: container(
      `<xy-button data-testid="story-test-btn" v-bind="args">{{args.content}}</xy-button>`
    ),
  }),
  play: async ({canvasElement, args, step}) => {
    const canvas = within(canvasElement)
    const btn = canvas.getByTestId("story-test-btn")

    await step(
      "When useThrottle is set to true, the onClick should be called once",
      async () => {
        set(args, "useThrottle", true)
        await userEvent.tripleClick(btn)

        await expect(args.onClick).toHaveBeenCalledOnce()
        clearAllMocks()
      }
    )

    await step(
      "When useThrottle is set false, the onClick should be called three times",
      async () => {
        set(args, "useThrottle", false)
        await userEvent.tripleClick(btn)

        await expect(args.onClick).toHaveBeenCalledTimes(3)
        clearAllMocks()
      }
    )

    await step(
      "When disabled is set true, the onClick should not be called",
      async () => {
        set(args, "disabled", true)
        await userEvent.tripleClick(btn)

        await expect(args.onClick).toHaveBeenCalledTimes(0)
        set(args, "disabled", false)
        clearAllMocks()
      }
    )

    await step(
      "When loading is set true, the onClick should not be called",
      async () => {
        set(args, "loading", true)
        await userEvent.tripleClick(btn)

        await expect(args.onClick).toHaveBeenCalledTimes(0)
        set(args, "loading", false)
        clearAllMocks()
      }
    )

    // await step("click btn", async () => {
    //   await userEvent.click(canvas.getByText("Button"));
    // })
    // await expect(args.onClick).toHaveBeenCalled();
  },
}

export const Autofocus: Story & { args: { content: string } } = {
  argTypes: {
    content: {
      control: {type: "text"},
    }
  },
  args: {
    content: "Button",
    autofocus: true,
  },
  render: (args) => ({
    components: {xyButton},
    setup() {
      return {args}
    },
    template: container(
      `
          <p>请点击浏览器的刷新页面来获取按钮聚焦</p>
          <xy-button data-testid="story-test-btn" v-bind="args">{{args.content}}</xy-button>
          `
    ),
  }),
  play: async ({args}) => {
    await userEvent.keyboard("{enter}")

    await expect(args.onClick).toHaveBeenCalledOnce()
    clearAllMocks()
  },
}

export const Circle: Story = {
  args: {
    icon: "search",
    circle: true,
  },
  render: (args) => ({
    components: {xyButton},
    setup() {
      return {args}
    },
    template: container(
      `<xy-button v-bind="args"/>`
    ),
  }),
  play: async ({canvasElement, args, step}) => {
    const canvas = within(canvasElement)

    await step("click button", async () => {
      await userEvent.click(canvas.getByRole("button"))
    })

    await expect(args.onClick).toHaveBeenCalled()
  },
}

export const Block: Story & { args: { content: string } } = {
  argTypes: {
    content: {
      control: {type: "text"},
    },
  },
  args: {
    content: "Button",
    block: true,
    type: "primary",
  },
  render: (args) => ({
    components: {xyButton},
    setup() {
      return {args};
    },
    template: container(
      `
      <xy-button data-testid="story-test-button" v-bind="args">{{args.content}}</xy-button>
      `
    ),
  }),
}

export const Group: Story & { args: { content1: string; content2: string } } = {
  argTypes: {
    groupType: {
      control: {type: "select"},
      options: ["primary", "success", "warning", "danger", "info", "default"],
    },
    groupSize: {
      control: {type: "select"},
      options: ["large", "default", "small", "tiny"],
    },
    groupDisabled: {
      control: "boolean",
    },
    groupVertical: {
      control: "boolean",
    },
    content1: {
      control: {type: "text"},
      defaultValue: "Button1",
    },
    content2: {
      control: {type: "text"},
      defaultValue: "Button2",
    },
  },
  args: {
    // round: true,
    content1: "Button1",
    content2: "Button2",
  },
  render: (args) => ({
    components: {xyButton, xyButtonGroup},
    setup() {
      return {args};
    },
    template: container(
      `
          <xy-button-group :type="args.groupType" :size="args.groupSize" :disabled="args.groupDisabled" :vertical="args.groupVertical">
            <xy-button v-bind="args">{{args.content1}}</xy-button>
            <xy-button v-bind="args">{{args.content2}}</xy-button>
          </xy-button-group>
          `
    ),
  }),
  play: async ({canvasElement, args, step}) => {
    const canvas = within(canvasElement)
    await step("click btn1", async () => {
      await userEvent.click(canvas.getByText("Button1"))
    });
    await step("click btn2", async () => {
      await userEvent.click(canvas.getByText("Button2"))
    });
    await expect(args.onClick).toHaveBeenCalled();
  },
}


export default meta