import type {CSSProperties} from "vue";

export type CardShadow = "never" | "hover" | "always";

export interface CardProps {
  // 卡片标题
  header?: string;
  // 卡片页脚
  footer?: string;
  // 卡片阴影显示时机
  shadow?: CardShadow;
  // 卡片内容背景阴影
  contentShadow?: boolean;
  // 卡片边框
  bordered?: boolean;
  // 卡片关闭
  closable?: boolean;
  // 卡片背景色
  color?: string;
  // 卡片通栏
  block?: boolean;
  bodyClass?: string[];
  bodyStyle?: CSSProperties;
  headerClass?: string[];
  headerStyle?: CSSProperties;
  footerClass?: string[];
  footerStyle?: CSSProperties;
}

export interface CardEmits {
  (e: "close", val: MouseEvent): void;
}