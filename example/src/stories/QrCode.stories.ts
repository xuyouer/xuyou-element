import type {ArgTypes, Meta, StoryObj} from "@storybook/vue3";
import {xyQrCode} from "@xuyou-element/components";
import "@xuyou-element/theme/index.scss";

type Story = StoryObj<typeof xyQrCode> & { argTypes?: ArgTypes }
const meta: Meta<typeof xyQrCode> = {
  title: "Example/QrCode",
  component: xyQrCode,
  tags: ["autodocs"],
  argTypes: {
    level: {
      control: "select",
      options: ["L", "M", "Q", "H"],
    },
    type: {
      control: "select",
      options: ["canvas", "svg"],
    },
    logoSize: {
      control: "select",
      options: ["large", "default", "small", "tiny"],
    },
    logoShape: {
      control: "select",
      options: ["default", "square", "circle"],
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
    content: "QrCode",
    value: "QrCode",
  },
  render: (args) => ({
    components: {xyQrCode},
    setup() {
      return {args};
    },
    template: container(
      `
      <xy-qr-code data-testid="story-test-qr-code" v-bind="args"/>
      `
    ),
  }),
}

export const Svg: Story = {
  args: {
    value: "QrCode",
    type: "svg",
  },
  render: (args) => ({
    components: {xyQrCode},
    setup() {
      return {args};
    },
    template: container(
      `
      <xy-qr-code data-testid="story-test-qr-code" v-bind="args"/>
      `
    ),
  }),
}

export const Logo: Story = {
  args: {
    value: "QrCode",
    logo: "https://m.media-amazon.com/images/M/MV5BZTgwZjZmMGQtMmE0My00YmM1LWJhMTctYTFhY2Q1ZDNjNWUwXkEyXkFqcGc@._V1_QL75_UY562_CR28,0,380,562_.jpg",
    showLogo: true,
  },
  render: (args) => ({
    components: {xyQrCode},
    setup() {
      return {args};
    },
    template: container(
      `
      <xy-qr-code data-testid="story-test-qr-code" v-bind="args"/>
      `
    ),
  }),
}

export default meta