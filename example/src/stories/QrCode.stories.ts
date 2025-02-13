import type {ArgTypes, Meta, StoryObj} from "@storybook/vue3";
import {xyQrCode} from "@xuyou-element/components";
import "@xuyou-element/theme/index.scss";

type Story = StoryObj<typeof xyQrCode> & { argTypes?: ArgTypes }
const meta: Meta<typeof xyQrCode> = {
  title: "Example/QrCode",
  component: xyQrCode,
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
    content: "QrCode",
  },
  render: (args) => ({
    components: {xyQrCode},
    setup() {
      return {args};
    },
    template: container(
      `
      <xy-qr-code data-testid="story-test-qr-code" v-bind="args">{{args.content}}</xy-qr-code>
      `
    ),
  }),
}

export default meta