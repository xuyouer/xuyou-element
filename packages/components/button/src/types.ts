import type {Component, Ref} from "vue";

export type ButtonType = "primary" | "success" | "warning" | "danger" | "info" | "default";
export type NativeType = "button" | "submit" | "reset";
export type ButtonSize = "large" | "default" | "small" | "tiny";

export interface ButtonProps {
  size?: ButtonSize;  // 尺寸
  type?: ButtonType;  // 类型
  plain?: boolean;  // 朴素按钮
  text?: boolean;  // 文字按钮
  textBg?: boolean;  // 显示文字按钮背景
  round?: boolean;  // 圆角按钮
  circle?: boolean;  // 圆形按钮
  dashed?: boolean;  // 虚线按钮
  strong?: boolean;  // 按钮文字加粗
  loading?: boolean;  // 加载中状态
  loadingIcon?: string | Component;  // 自定义加载中状态图标组件
  disabled?: boolean;  // 禁用
  icon?: string | Component;  // 图标组件
  autofocus?: boolean;  // 原生autofocus属性
  nativeType?: NativeType;  // 原生type属性
  autoInsertSpace?: boolean;  // 自动在两个中文字符之间插入空格
  color?: string;  // 自定义按钮颜色, 并自动计算 hover 和 active 触发后的颜色以及按钮内文字颜色
  textColor?: string;  // 自定义按钮文字颜色
  tag?: string | Component;  // 自定义元素标签
  useThrottle?: boolean;  // 节流模式
  throttleDuration?: number;  // 节时间间隔/ms
  block?: boolean;  // 按钮通栏
}

export interface ButtonGroupProps {
  size?: ButtonSize;  // 尺寸
  type?: ButtonType;  // 类型
  disabled?: boolean;  // 禁用
  vertical?: boolean;  // 垂直排列方式
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