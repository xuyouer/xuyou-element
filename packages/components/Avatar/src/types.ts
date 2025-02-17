import type {Component} from "vue";

export type AvatarType = "primary" | "success" | "warning" | "danger" | "info" | "default";
export type AvatarSize = "large" | "default" | "small" | "tiny";
export type AvatarFit = "fill" | "contain" | "cover" | "none" | "scale-down";
export type AvatarShape = "circle" | "square" | "default";
export type AvatarGroupDirection = "horizontal" | "vertical";
export type AvatarGroupOverflow =
  | "hidden"  // 隐藏超出部分的头像
  | "visible"  // 显示超出部分的头像
  | "number"  // 显示一个数字, 表示剩余头像的数量
  ;

export interface AvatarProps {
  type?: AvatarType;
  size?: AvatarSize | number;
  // 图片 Avatar 在容器内的的适应类型
  fit?: AvatarFit;
  // Avatar 形状
  shape?: AvatarShape;
  // Avatar 图片的源地址
  src?: string;
  // 图片 Avatar 的原生 srcset 属性
  srcSet?: string;
  // 图片 Avatar 的原生 alt 属性
  alt?: string;
  icon?: string | Component;
  // Avatar 背景色
  color?: string;
  // Avatar 是否带边框
  bordered?: boolean;
  // Avatar 首字符占位
  placeholder?: boolean;
}

export interface AvatarGroupProps {
  type?: AvatarType;
  size?: AvatarSize | number;
  shape?: AvatarShape;
  // 头像组中头像的最大数量
  max?: number;
  // 头像之间的间距
  spacing?: number;
  // 头像组的排列方向
  direction?: AvatarGroupDirection;
  // 头像数量超出最大数量 显示剩余的头像
  overflow?: AvatarGroupOverflow;
}

export interface AvatarGroupContext {
  type?: AvatarType;
  size?: AvatarSize | number;
  shape?: AvatarShape;
}