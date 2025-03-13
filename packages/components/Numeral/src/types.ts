import type {CSSProperties} from "vue";

export type NumeralFormat =
  | "0"
  | "00"
  | "000"
  | "0.0"
  | "0.0[0000]"
  | "0.00"
  | "0,0.00"
  | ".0"
  | ".00"
  | "0a"
  | "0.0a"
  | "0.00a"
  | "0b"
  | "0.0b"
  | "0.00b"
  | "0.0ib"
  | "0.00ib"
  | "0%"
  | "0.00%"
  | "00:00:00"
  ;

export interface NumeralProps {
  // 数值
  value?: string | number;
  // 格式, 详情见 numeral库format格式
  format?: NumeralFormat | string;
  // 前缀
  prefix?: string | number;
  // 后缀
  suffix?: string | number;
  // 小数点前的数值是否大写显示
  upperCaseBeforeDecimal?: boolean;
  // 中文数字
  chinese?: boolean;
  numeralClass?: string[];
  numeralStyle?: CSSProperties;
  prefixClass?: string[];
  prefixStyle?: CSSProperties;
  suffixClass?: string[];
  suffixStyle?: CSSProperties;
  upperClass?: string[];
  upperStyle?: CSSProperties;
}