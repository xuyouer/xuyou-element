export type TextType = "primary" | "success" | "warning" | "danger" | "info" | "default";
export type TextSize = "large" | "default" | "small" | "tiny";

export interface TextProps {
  type?: TextType;
  size?: TextSize;
  // 显示省略号
  truncated?: boolean;
  // 最大行数
  lineClamp?: string | number;
  // 自定义元素标签
  tag?: string;
  // 文字颜色
  color?: string;
  // 背景渐变色
  gradient?: string;
  // 显示背景色
  coloured?: boolean;
}