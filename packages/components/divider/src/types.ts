export type DividerBorderStyle =
  | "none"
  | "hidden"
  | "dotted"
  | "dashed"
  | "solid"
  | "double"
  | "groove"
  | "ridge"
  | "inset"
  | "outset"
  ;
export type DividerDirection = "horizontal" | "vertical";
export type DividerContentPosition = "left" | "right" | "center";

export interface DividerProps {
  borderStyle?: DividerBorderStyle;  // 分隔符样式
  direction?: DividerDirection;  // 分割线方向
  contentPosition?: DividerContentPosition;  // 自定义分隔线内容的位置
}