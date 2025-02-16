import type {CSSProperties} from "vue";

export type BadgeType = "primary" | "success" | "warning" | "danger" | "info" | "default";

export interface BadgeProps {
  // 类型
  type?: BadgeType;
  // 显示值
  value?: number | string;
  // 最大值, 超过最大值会显示 {max}+, 当 value 为 number 生效
  max?: number;
  // 是否显示小圆点
  dot?: boolean;
  // 是否隐藏 Badge
  hidden?: boolean;
  // 值为0是否显示 Badge
  showZero?: boolean;
  // Badge 背景色
  color?: string;
  // 偏移量
  offset?: [number | string, number | string];
  // 是否为角标
  corner?: boolean;
  // 备注角标
  remark?: boolean;
  // badge 样式
  badgeStyle?: CSSProperties;
  // badge 类名
  badgeClass?: string[];
}