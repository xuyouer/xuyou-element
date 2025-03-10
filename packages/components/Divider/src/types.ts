import type {CSSProperties} from "vue";

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
  // 分隔符样式
  borderStyle?: DividerBorderStyle;
  // 分割线方向
  direction?: DividerDirection;
  // 自定义分隔线内容的位置
  contentPosition?: DividerContentPosition;
  dividerClass?: string[];
  dividerStyle?: CSSProperties;
}