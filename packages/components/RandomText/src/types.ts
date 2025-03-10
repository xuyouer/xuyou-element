import type {CSSProperties} from "vue";

export type RandomTextType = "all" | "poetry";
export type RandomTextRenderType = "text" | "svg";

export interface RandomTextProps {
  // 类型, all-全部 | poetry-诗词
  type?: RandomTextType;
  // 渲染类型, text | svg
  renderType?: RandomTextRenderType;
  // 通栏
  block?: boolean;
  // 引言
  intro?: boolean;
  introClass?: string[];
  introStyle?: CSSProperties;
  textClass?: string[];
  textStyle?: CSSProperties;
}