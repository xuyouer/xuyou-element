export type TextType = "primary" | "success" | "warning" | "danger" | "info" | "default";
export type TextSize = "large" | "default" | "small" | "tiny";

export interface TextProps {
  type?: TextType;
  size?: TextSize;
  truncated?: boolean;  // 显示省略号
  lineClamp?: string | number;  // 最大行数
  tag?: string;  // 自定义元素标签
  color?: string;
  gradient?: string;
  coloured?: boolean;  // 显示背景色
}