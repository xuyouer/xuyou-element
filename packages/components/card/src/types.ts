import type {CSSProperties} from "vue";

export type CardShadow = "never" | "hover" | "always";

export interface CardProps {
  header?: string;  // 卡片标题
  footer?: string;  // 卡片页脚
  shadow?: CardShadow;  // 卡片阴影显示时机
  contentShadow?: boolean;  // 卡片内容背景阴影
  bordered?: boolean;  // 卡片边框
  closable?: boolean;  // 卡片关闭
  color?: string;  // 卡片背景色
  block?: boolean;  // 卡片通栏
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