import type {CSSProperties} from "vue";

export type QrCodeLevel = "L" | "M" | "Q" | "H";
export type QrCodeType = "canvas" | "svg";
export type QrCodeLogoSize = "large" | "default" | "small" | "tiny";
export type QrCodeLogoShape = "default" | "square" | "circle";

export interface QrCodeProps {
  // 文本信息
  value?: string;
  // 尺寸
  size?: number;
  // 二维码颜色
  color?: string;
  // 背景色
  backgroundColor?: string;
  // 纠错等级
  level?: QrCodeLevel;
  // 渲染类型
  type?: QrCodeType;
  // 填充大小
  padding?: number;
  // logo 图片地址
  logo?: string;
  // logo 尺寸
  logoSize?: QrCodeLogoSize | number;
  // logo 形状
  logoShape?: QrCodeLogoShape;
  // logo 图标
  logoIcon?: string;
  // 是否显示 logo
  showLogo?: boolean;
  // 是否显示 二维码外边框
  bordered?: boolean;
  // 自定义类名
  qrCodeClass?: string[];
  // 自定义样式
  qrCodeStyle?: CSSProperties;
}