export type CoverTitlePosition =
  | "top"
  | "top-start"
  | "top-end"
  | "bottom"
  | "bottom-start"
  | "bottom-end"
  | "left"
  | "left-start"
  | "left-end"
  | "right"
  | "right-start"
  | "right-end"
  | "center"
  ;

export interface CoverProps {
  bordered?: boolean;  // 边框
  outlined?: boolean,  // 内描边
  mask?: boolean,  // 半透明遮罩背景
  feather?: boolean,  // 矩形羽化
  width?: number,
  height?: number,
  title?: string,
  subtitle?: string,
  titlePosition?: CoverTitlePosition,
  padding?: number,
}