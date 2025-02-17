import type {ArgTypes, Meta, StoryObj} from "@storybook/vue3";
import {xyPoster} from "@xuyou-element/components";
import "@xuyou-element/theme/index.scss";

type Story = StoryObj<typeof xyPoster> & { argTypes?: ArgTypes }
const meta: Meta<typeof xyPoster> = {
  title: "Example/Poster",
  component: xyPoster,
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
    content: "Poster",
  },
  render: (args) => ({
    components: {xyPoster},
    setup() {
      return {args};
    },
    template: container(
      `
      <xy-poster data-testid="story-test-poster" v-bind="args"/>
      `
    ),
  }),
}

export default meta