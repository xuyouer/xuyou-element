import type {Component, Ref} from "vue";

export type ButtonType = "primary" | "success" | "warning" | "danger" | "info" | "default";
export type NativeType = "button" | "submit" | "reset";
export type ButtonSize = "large" | "default" | "small" | "tiny";

export interface ButtonProps {
  // 尺寸
  size?: ButtonSize;
  // 类型
  type?: ButtonType;
  // 朴素按钮
  plain?: boolean;
  // 文字按钮
  text?: boolean;
  // 显示文字按钮背景
  textBg?: boolean;
  // 圆角按钮
  round?: boolean;
  // 圆形按钮
  circle?: boolean;
  // 虚线按钮
  dashed?: boolean;
  // 按钮文字加粗
  strong?: boolean;
  // 加载中状态
  loading?: boolean;
  // 自定义加载中状态图标组件
  loadingIcon?: string | Component;
  // 禁用
  disabled?: boolean;
  // 图标组件
  icon?: string | Component;
  // 原生autofocus属性
  autofocus?: boolean;
  // 原生type属性
  nativeType?: NativeType;
  // 自动在两个中文字符之间插入空格
  autoInsertSpace?: boolean;
  // 自定义按钮颜色, 并自动计算 hover 和 active 触发后的颜色以及按钮内文字颜色
  color?: string;
  // 自定义按钮文字颜色
  textColor?: string;
  // 自定义元素标签
  tag?: string | Component;
  // 节流模式
  useThrottle?: boolean;
  // 节时间间隔/ms
  throttleDuration?: number;
  // 按钮通栏
  block?: boolean;
}

export interface ButtonGroupProps {
  // 尺寸
  size?: ButtonSize;
  // 类型
  type?: ButtonType;
  // 禁用
  disabled?: boolean;
  // 垂直排列方式
  vertical?: boolean;
}

export interface ButtonGroupContext {
  size?: ButtonSize;
  type?: ButtonType;
  disabled?: boolean;
}

export interface ButtonEmits {
  (e: "click", val: MouseEvent): void;
}

export interface ButtonInstance {
  ref?: Ref<HTMLButtonElement | void>;
}