import type {CSSProperties} from "vue";

export type EmptyImageSize = "large" | "default" | "small" | "tiny";

export interface EmptyProps {
  // 描述信息
  description?: string;
  // 是否展示描述信息
  showDescription?: boolean;
  // 是否展示额外信息
  showExtra?: boolean;
  // 是否展示图标
  showIcon?: boolean;
  // 是否展示图片
  showImage?: boolean;
  // 图像地址
  image?: string;
  // 图像尺寸(宽度)
  imageSize?: EmptyImageSize | number;
  // 额外信息
  extra?: string;
  // 点击事件
  onClick?: (event: MouseEvent) => void;
  iconClass?: string[];
  iconStyle?: CSSProperties;
  imageClass?: string[];
  imageStyle?: CSSProperties;
  descClass?: string[];
  descStyle?: CSSProperties;
  extraClass?: string[];
  extraStyle?: CSSProperties;
}