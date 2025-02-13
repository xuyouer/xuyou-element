import type {CSSProperties} from "vue";

export type QrCodeType = "canvas" | "svg";
export type QrCodeLevel = "L" | "M" | "Q" | "H";

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
  // 自定义类名
  qrCodeClass?: string[];
  // 自定义样式
  qrCodeStyle?: CSSProperties;
}