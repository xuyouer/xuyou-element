import type {CSSProperties} from "vue";

export type BarCodeFormat =
  | "CODE39"
  | "CODE128"
  | "CODE128A"
  | "CODE128B"
  | "CODE128C"
  | "EAN13"
  | "EAN8"
  | "EAN5"
  | "EAN2"
  | "UPC"
  | "ITF14"
  | "ITF"
  | "MSI"
  | "MSI10"
  | "MSI11"
  | "MSI1010"
  | "MSI1110"
  | "pharmacode"
  | "codabar"
  ;
export type BarCodeFontOptions = "lighter" | "bold" | "italic" | "lighter italic" | "bold italic";
export type BarCodeTextAlign = "left" | "center" | "right";
export type BarCodeTextPosition = "bottom" | "top";

export interface BarCodeBaseOptions {
  // 单个条的宽度
  width?: number;
  // 条码高度
  height?: number;
  // 条码类型
  format?: BarCodeFormat | string;
  // 文本显示
  displayValue?: boolean;
  // 字体样式/粗细
  fontOptions?: BarCodeFontOptions | string;
  // 字体类型
  font?: string;
  // 文本
  text?: string;
  // 文本对齐
  textAlign?: BarCodeTextAlign;
  // 文本定位
  textPosition?: BarCodeTextPosition;
  // 条形码和文本之间的间距
  textMargin?: number;
  // 字体大小
  fontSize?: number;
  // 背景色
  background?: string;
  // 条和文本的颜色
  lineColor?: string;
  // 条码周围的空间边距
  margin?: number;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  valid?: (valid: boolean) => void;
}

export interface BarCodeNodeOptions extends BarCodeBaseOptions {
  xmlDocument?: XMLDocument;
}

export interface BarCodeCode128Options extends BarCodeBaseOptions {
  // 启用编码CODE128为GS1-128/EAN-128, 仅适用于CODE128*
  ean128?: boolean;
}

export interface BarCodeEan13Options extends BarCodeBaseOptions {
  // 防护栏, 仅适用于EAN8/EAN13
  flat?: boolean;
  // 条码后面打印一个字符, 仅适用于EAN13
  lastChar?: string;
}

export type BarCodeOptions = BarCodeBaseOptions | BarCodeNodeOptions | BarCodeCode128Options | BarCodeEan13Options;
export type BarCodeType = "default" | "addon";
export type BarCodeRenderType = "canvas" | "svg";

export interface BarCodeProps {
  // 条码数据
  value?: string;
  // 附加条码数据, 仅适用于EAN, EAN-5和EAN-2是附加条码, 通常与EAN-13或EAN-8结合使用
  addonValue?: string;
  // 条码类型
  type?: BarCodeType;
  // 条码渲染类型
  renderType?: BarCodeRenderType;
  // 条码与附加码之间的空白间距
  blank?: number;
  // 条码选项
  options?: BarCodeOptions;
  eanOptions?: BarCodeOptions;
  // 附加码选项
  addonOptions?: BarCodeOptions;
  barcodeClass?: string[];
  barcodeStyle?: CSSProperties;
}