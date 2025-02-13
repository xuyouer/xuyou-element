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
  size?: AvatarSize;
  fit?: AvatarFit;  // 图片 Avatar 在容器内的的适应类型
  shape?: AvatarShape;  // Avatar 形状
  src?: string;  // Avatar 图片的源地址
  srcSet?: string;  // 图片 Avatar 的原生 srcset 属性
  alt?: string;  // 图片 Avatar 的原生 alt 属性
  icon?: string | Component;
  color?: string;  // Avatar 背景色
  bordered?: boolean;  // Avatar 是否带边框
  placeholder?: boolean;  // Avatar 首字符占位
}

export interface AvatarGroupProps {
  type?: AvatarType;
  size?: AvatarSize;
  shape?: AvatarShape;
  max?: number;  // 头像组中头像的最大数量
  spacing?: number;  // 头像之间的间距
  direction?: AvatarGroupDirection;  // 头像组的排列方向
  overflow?: AvatarGroupOverflow;  // 头像数量超出最大数量 显示剩余的头像
}

export interface AvatarGroupContext {
  type?: AvatarType;
  size?: AvatarSize;
  shape?: AvatarShape;
}