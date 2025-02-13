import type {CSSProperties} from "vue";

export type SpaceDirection =
  | "horizontal"
  | "vertical"
  | "horizontal-reverse"
  | "vertical-reverse"
  ;
export type SpaceAlignItems =
  | "normal"
  | "stretch"
  | "center"
  | "start"
  | "end"
  | "flex-start"
  | "flex-end"
  | "self-start"
  | "self-end"
  | "baseline"
  | "first baseline"
  | "last baseline"
  | "safe center"
  | "unsafe center"
  | "inherit"
  | "initial"
  | "revert"
  | "revert-layer"
  | "unset"
  ;
export type SpaceJustifyContent =
  | "center"
  | "start"
  | "end"
  | "flex-start"
  | "flex-end"
  | "left"
  | "right"
  | "baseline"
  | "first baseline"
  | "last baseline"
  | "space-between"
  | "space-around"
  | "space-evenly"
  | "stretch"
  | "safe center"
  | "unsafe center"
  | "inherit"
  | "initial"
  | "unset"
  ;
export type SpaceSize =
  | "large"
  | "default"
  | "small"
  | "tiny"
  ;
export type SpaceOverflow =
  | "visible"
  | "hidden"
  | "clip"
  | "scroll"
  | "auto"
  | "hidden visible"
  | "inherit"
  | "initial"
  | "revert"
  | "revert-layer"
  | "unset"
  ;

export interface SpaceProps {
  // 排列方向
  direction?: SpaceDirection;
  // 垂直
  alignItems?: SpaceAlignItems;
  // 水平
  justifyContent?: SpaceJustifyContent;
  // 间隔大小
  size?: SpaceSize | number;
  // 换行
  wrap?: boolean;
  // 通栏
  block?: boolean;
  // 溢出
  overflow?: SpaceOverflow;
  // 自定义类名
  spaceClass?: string[];
  // 自定义样式
  spaceStyle?: CSSProperties;
}