<script setup lang="ts">
import {BatteryDeadOutline, BatteryFullOutline, AddOutline, Apps, At, BanOutline} from "@vicons/ionicons5";
</script>

<template>
  <div>
    基础用法
    <xy-button>默认按钮</xy-button>
    <xy-button type="primary">普通按钮</xy-button>
    <xy-button type="success">成功按钮</xy-button>
    <xy-button type="warning">警告按钮</xy-button>
    <xy-button type="danger">危险按钮</xy-button>
    <xy-button type="info">信息按钮</xy-button>
    <br>
    <br>
    圆角按钮 Round
    <xy-button round>默认按钮</xy-button>
    <xy-button round type="primary">普通按钮</xy-button>
    <xy-button round type="success">成功按钮</xy-button>
    <xy-button round type="warning">警告按钮</xy-button>
    <xy-button round type="danger">危险按钮</xy-button>
    <xy-button round type="info">信息按钮</xy-button>
    <br>
    <br>
    圆形按钮 Circle
    <xy-button circle size="tiny">
      <BatteryFullOutline/>
    </xy-button>
    <xy-button circle size="small">
      <BatteryFullOutline/>
    </xy-button>
    <xy-button circle>
      <BatteryFullOutline/>
    </xy-button>
    <xy-button circle size="large">
      <BatteryFullOutline/>
    </xy-button>
    <xy-button circle type="primary">
      <AddOutline/>
    </xy-button>
    <xy-button circle type="success">
      <Apps/>
    </xy-button>
    <xy-button circle type="warning">
      <At/>
    </xy-button>
    <xy-button circle type="danger">
      <BatteryDeadOutline/>
    </xy-button>
    <xy-button circle type="info">
      <BanOutline/>
    </xy-button>
    <xy-button circle>长颈鹿的脖子那么长，哽咽的时候是不是很难受</xy-button>
    <xy-button circle type="primary">小强有两个大脑，孤单的时候会不会一起想着谁</xy-button>
    <xy-button circle type="success">章鱼有三颗心脏心痛的时候是不是很痛</xy-button>
    <xy-button circle type="warning">乌鸦可以学人说话，尴尬的时候会不会假装咳嗽？</xy-button>
    <xy-button circle type="danger">骆驼有长长的睫毛，想哭的时候能不能说眼睛进沙了</xy-button>
    <xy-button circle type="info">蛇没有宽宽的肩膀，他累的时候给不了能够依靠的温暖</xy-button>
    <br>
    <br>
    朴素按钮 Plain
    <xy-button plain>默认按钮</xy-button>
    <xy-button plain type="primary">普通按钮</xy-button>
    <xy-button plain type="success">成功按钮</xy-button>
    <xy-button plain type="warning">警告按钮</xy-button>
    <xy-button plain type="danger">危险按钮</xy-button>
    <xy-button plain type="info">信息按钮</xy-button>
    <br>
    <br>
    尺寸 Size
    <xy-button size="tiny" type="primary">Tiny默认按钮</xy-button>
    <xy-button size="small" type="primary">Small默认按钮</xy-button>
    <xy-button type="primary">Default默认按钮</xy-button>
    <xy-button size="large" type="primary">Large默认按钮</xy-button>
    <br>
    <br>
    自定义颜色 Color
    <xy-button color="#007ab8">默认按钮</xy-button>
    <xy-button color="#007bff" type="primary">普通按钮</xy-button>
    <xy-button color="#28a745" type="success">成功按钮</xy-button>
    <xy-button color="#6f42c1" type="warning">警告按钮</xy-button>
    <xy-button color="#ea3a3a" type="danger">危险按钮</xy-button>
    <xy-button color="#f8f9fa" type="info">信息按钮</xy-button>
    <br>
    <br>
    自定义文字颜色 TextColor
    <xy-button text-color="#ffebdd">默认按钮</xy-button>
    <xy-button text-color="#ee6eb3" type="primary">普通按钮</xy-button>
    <xy-button text-color="#6c757d" type="success">成功按钮</xy-button>
    <xy-button text-color="#5fa134" type="warning">警告按钮</xy-button>
    <xy-button text-color="#2196f3" type="danger">危险按钮</xy-button>
    <xy-button text-color="#00c1d5" type="info">信息按钮</xy-button>
    <br>
    <br>
    自定义颜色 Color TextColor
    <xy-button color="#007ab8" text-color="#5fa134">默认按钮</xy-button>
    <xy-button color="#007bff" text-color="#5fa134" type="primary">普通按钮</xy-button>
    <xy-button color="#28a745" text-color="#5fa134" type="success">成功按钮</xy-button>
    <xy-button color="#6f42c1" text-color="#5fa134" type="warning">警告按钮</xy-button>
    <xy-button color="#ea3a3a" text-color="#5fa134" type="danger">危险按钮</xy-button>
    <xy-button color="#f8f9fa" text-color="#5fa134" type="info">信息按钮</xy-button>
    <br>
    <br>
    禁用状态 Disabled
    <xy-button disabled>默认按钮</xy-button>
    <xy-button disabled type="primary">普通按钮</xy-button>
    <xy-button disabled type="success">成功按钮</xy-button>
    <xy-button disabled type="warning">警告按钮</xy-button>
    <xy-button disabled type="danger">危险按钮</xy-button>
    <xy-button disabled type="info">信息按钮</xy-button>
    <br>
    <br>
    虚线按钮 Dashed
    <xy-button dashed>默认按钮</xy-button>
    <xy-button dashed type="primary">普通按钮</xy-button>
    <xy-button dashed type="success">成功按钮</xy-button>
    <xy-button dashed type="warning">警告按钮</xy-button>
    <xy-button dashed type="danger">危险按钮</xy-button>
    <xy-button dashed type="info">信息按钮</xy-button>
    <br>
    <br>
    按钮文字加粗 Strong
    <xy-button strong>默认按钮</xy-button>
    <xy-button strong type="primary">普通按钮</xy-button>
    <xy-button strong type="success">成功按钮</xy-button>
    <xy-button strong type="warning">警告按钮</xy-button>
    <xy-button strong type="danger">危险按钮</xy-button>
    <xy-button strong type="info">信息按钮</xy-button>
    <br>
    <br>
    文字按钮 Text
    <xy-button text>默认按钮</xy-button>
    <xy-button text type="primary">普通按钮</xy-button>
    <xy-button text type="success">成功按钮</xy-button>
    <xy-button text type="warning">警告按钮</xy-button>
    <xy-button text type="danger">危险按钮</xy-button>
    <xy-button text type="info">信息按钮</xy-button>
    <br>
    文字按钮-背景 Text Text-bg
    <xy-button text text-bg>默认按钮</xy-button>
    <xy-button text text-bg type="primary">普通按钮</xy-button>
    <xy-button text text-bg type="success">成功按钮</xy-button>
    <xy-button text text-bg type="warning">警告按钮</xy-button>
    <xy-button text text-bg type="danger">危险按钮</xy-button>
    <xy-button text text-bg type="info">信息按钮</xy-button>
    <br>
    <br>
    加载状态按钮 Loading
    <xy-button loading>Loading...</xy-button>
    <xy-button loading type="primary">Loading...</xy-button>
    <xy-button loading type="success">Loading...</xy-button>
    <xy-button loading type="warning">Loading...</xy-button>
    <xy-button loading type="danger">Loading...</xy-button>
    <xy-button loading type="info">Loading...</xy-button>
  </div>
</template>

<style scoped lang="scss">

</style>
