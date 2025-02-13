import type {ArgTypes, Meta, StoryObj} from "@storybook/vue3";
import {xyCode} from "@xuyou-element/components";
import "@xuyou-element/theme/index.scss";

type Story = StoryObj<typeof xyCode> & { argTypes?: ArgTypes }
const meta: Meta<typeof xyCode> = {
  title: "Example/Code",
  component: xyCode,
  tags: ["autodocs"],
  argTypes: {
    theme: {
      control: "select",
      options: ["light", "dark"],
    },
  },
}

const container = (val: string) => `
<div style="margin:5px">
  ${val}
</div>
`

export const Default: Story = {
  args: {
    code: `<xy-code code="荞麦花"/>`,
    language: "vue",
  },
  render: (args) => ({
    components: {xyCode},
    setup() {
      return {args};
    },
    template: container(
      `
      <xy-code data-testid="story-test-code" v-bind="args"/>
      `
    ),
  }),
}

export const Collapsed: Story = {
  args: {
    code: `长颈鹿的脖子那么长，哽咽的时候是不是很难受？章鱼有三颗心脏心痛的时候是不是很痛？乌鸦可以学人说话，尴尬的时候会不会假装咳嗽？骆驼有长长的睫毛，想哭的时候能不能说眼睛进沙了？蛇没有宽宽的肩膀，他累的时候给不了能够依靠的温暖，小强有两个大脑，孤单的时候会不会一起想着谁？

我没有长长的脖子，却哽咽的说不出话，我没有三颗心脏，体会不到无法忍受的痛再多三倍，我假装咳嗽，假装被沙子迷了眼，你也没有看我一眼，是因为我太弱小，没有很可靠的肩膀吗？

鱼的记忆只有七秒，在下一个七秒他们还会不会相遇？鸟儿没有手，他哭泣的时候会不会有人给他擦眼泪？蝙蝠没有耳朵，他给她说爱她的时候，她会不会假装没听到？

世界那么大，你迷路的时候，可不可以让我牵着你的手一直走下去？无时无刻的清澈的想念，一定比两个大脑一起想你还多吧，蜉蝣只能活很短，可能一辈子都来不及和心里珍藏的那个人说一些想说的话，我又能活多久时间会不会可以给我开口的勇气？

把人生看作是自己独一无二的创作，便不会频频的回首，你会不会忽然的出现在旧时光的风景里，成为我珍藏一生的美丽？`,
    language: "markdown",
    collapsed: false,
  },
  render: (args) => ({
    components: {xyCode},
    setup() {
      return {args};
    },
    template: container(
      `
      <xy-code data-testid="story-test-code" v-bind="args"/>
      `
    ),
  }),
}

export const Buttons: Story = {
  args: {
    code: `泛彼柏舟，亦泛其流。耿耿不寐，如有隐忧。`,
    language: "markdown",
    gridlines: true,
    collapsed: false,
    showEditButton: false,
    showcase: false,
    format: false,
    buttons: [
      {icon: ['far', 'heart']},
      {icon: ['far', 'face-smile']},
      {
        icon: ['fas', 'share'], onClick: () => {
          console.log('Share clicked');
        }
      },
      {
        icon: ['fas', 'fish'], onClick: () => {
          console.log('Fish clicked');
        }
      },
    ],
  },
  render: (args) => ({
    components: {xyCode},
    setup() {
      return {args};
    },
    template: container(
      `
      <xy-code data-testid="story-test-code" v-bind="args"/>
      `
    ),
  }),
}

export default meta