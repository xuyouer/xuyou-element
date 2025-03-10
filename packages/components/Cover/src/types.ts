import type {CSSProperties} from "vue";

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
  // 边框
  bordered?: boolean;
  // 内描边
  outlined?: boolean;
  // 半透明遮罩背景
  mask?: boolean;
  // 矩形羽化
  feather?: boolean;
  width?: number;
  height?: number;
  title?: string;
  subtitle?: string;
  titlePosition?: CoverTitlePosition;
  padding?: number;
  titleClass?: string[];
  titleStyle?: CSSProperties;
}