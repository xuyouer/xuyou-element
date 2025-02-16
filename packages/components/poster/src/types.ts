import type {CSSProperties} from "vue";

export interface PosterProps {
  // 宽度, 单位: px
  width?: number;
  posterClass?: string[];
  posterStyle?: CSSProperties;
}