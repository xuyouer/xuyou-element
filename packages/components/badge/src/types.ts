import type {CSSProperties} from "vue";

export type BadgeType = "primary" | "success" | "warning" | "danger" | "info" | "default";

export interface BadgeProps {
  type?: BadgeType;
  value?: number | string;  // 显示值
  max?: number;  // 最大值, 超过最大值会显示 {max}+, 当 value 为 number 生效
  dot?: boolean;  // 是否显示小圆点
  hidden?: boolean;  // 是否隐藏 Badge
  showZero?: boolean;  // 值为0是否显示 Badge
  color?: string;  // Badge 背景色
  offset?: [number | string, number | string];  // 偏移量
  corner?: boolean;  // 是否为角标
  remark?: boolean;  // 备注角标
  badgeStyle?: CSSProperties;  // badge 样式
  badgeClass?: string[];  // badge 类名
}