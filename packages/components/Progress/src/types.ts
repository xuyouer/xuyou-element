import type {CSSProperties} from "vue";

export type ProgressStatus = "primary" | "success" | "warning" | "danger" | "info" | "default";
export type ProgressType = "line" | "circle" | "dashboard";
export type ProgressLineIndicatorPlacement = "inside" | "outside";

export interface ProgressProps {
  // 状态
  status?: ProgressStatus;
  // 类型
  type?: ProgressType;
  // 百分比, 0 ~ 100
  percent?: number;
  // 处理中
  processing?: boolean;
  // 指示标文本颜色
  indicatorTextColor?: string;
  // 指示标显示
  showIndicator?: boolean;
  // 进度条颜色, stops 表示渐变色, 数组长度 = 2, [0] 渐变的起始色, [1] 渐变的终止色
  strokeColor?: string | { stops: [string, string] };
  // 轨道颜色
  trailColor?: string;
  // line类型宽度, 单位 px
  lineWidth?: number;
  // line类型高度, 单位 px
  lineHeight?: number;
  // line类型指示标位置
  lineIndicatorPlacement?: ProgressLineIndicatorPlacement;
  // line类型进度条圆角
  lineStrokeBorderRadius?: number | string;
  // line类型轨道圆角
  lineTrailBorderRadius?: number | string;
  // 进度条宽度, 单位 px
  strokeWidth?: number;
  // 轨道宽度, 单位 px
  trailWidth?: number;
  // circle类型尺寸
  circleSize?: number;
  // circle类型偏移角度, 0 ~ 360
  circleOffsetDegree?: number;
  // dashboard类型起始角度
  dashboardOffset?: number;
  // dashboard类型缺口角度, 0 ~ 360
  dashboardOffsetDegree?: number;
  indicatorClass?: string[];
  indicatorStyle?: CSSProperties;
  strokeClass?: string[];
  strokeStyle?: CSSProperties;
  trailClass?: string[];
  trailStyle?: CSSProperties;
}