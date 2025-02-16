import {getTimeZoneSupported} from "@xuyou-element/utils";
import type {CSSProperties} from "vue";

export type TimeFormat =
  | "yyyy-MM-dd hh:mm:ss"
  | "yyyy-MM-dd hh:mm"
  | "yyyy-MM-dd"
  | "MM-dd"
  | "hh:mm:ss"
  | "hh:mm"
  ;
const supportedTimeZones = getTimeZoneSupported()
export type TimeZone = typeof supportedTimeZones[number]
export type TimeType =
  | "relative"  // 相对时间
  | "datetime"
  ;

export interface TimeProps {
  // 时间
  time?: number | Date;
  // 目标时间, 用于计算相对时间
  to?: number | Date;
  // 时间格式化字符串
  format?: TimeFormat | string;
  // 格式化时间使用时区
  timeZone?: TimeZone | string;
  // 时间类型
  type?: TimeType;
  // Unix 时间戳
  unix?: boolean;
  // 自动更新的间隔, 单位: 秒
  interval?: number;
  // 自定义类名
  timeClass?: string[];
  // 自定义样式
  timeStyle?: CSSProperties;
}