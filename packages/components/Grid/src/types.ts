import type {CSSProperties} from "vue";

export type GridShadow = "never" | "hover" | "always";
export type GridItemShadow = GridShadow;

export interface GridProps {
  // 最大支持的列数
  col?: number;
  // 宫格项是否宽高一致
  square?: boolean;
  // 宫格项之间的间距, 单位为 `px`
  gap?: number;
  // 宫格项内容的间距, 单位为 `px`
  padding?: number;
  // 宫格项内容是否垂直水平居中
  center?: boolean;
  // 宫格的宽度, 单位为 `px`
  width?: string | number;
  // 宫格的高度, 单位为 `px`
  height?: string | number;
  // 宫格的背景颜色
  backgroundColor?: string;
  // 宫格是否显示边框
  bordered?: boolean;
  // 宫格的边框颜色
  borderColor?: string;
  // 宫格的边框圆角, 单位为 `px`
  borderRadius?: number;
  // 宫格的阴影显示时机
  shadow?: GridShadow;
  // 是否禁用宫格
  disabled?: boolean;
  // 宫格的点击事件
  onClick?: (event: MouseEvent) => void;
  // 宫格的鼠标移入事件
  onMouseEnter?: (event: MouseEvent) => void;
  // 宫格的鼠标移出事件
  onMouseLeave?: (event: MouseEvent) => void;
}

export interface GridItemProps {
  // 宫格项的宽度, 单位为 `px`
  width?: string | number;
  // 宫格项的高度, 单位为 `px`
  height?: string | number;
  // 宫格项内容是否垂直水平居中
  center?: boolean;
  // 宫格项的背景颜色
  backgroundColor?: string;
  // 宫格项是否显示边框
  bordered?: boolean;
  // 宫格项的边框颜色
  borderColor?: string;
  // 宫格项的边框圆角, 单位为 `px`
  borderRadius?: number;
  // 宫格项的阴影显示时机
  shadow?: GridItemShadow;
  // 是否禁用宫格项
  disabled?: boolean;
  // 宫格项跨越的列数
  colSpan?: number;
  // 宫格项跨越的行数
  rowSpan?: number;
  // 宫格项的排列顺序, 数值越小, 排列越靠前
  order?: number;
  // 宫格项的点击事件
  onClick?: (event: MouseEvent) => void;
  // 宫格项的鼠标移入事件
  onMouseEnter?: (event: MouseEvent) => void;
  // 宫格项的鼠标移出事件
  onMouseLeave?: (event: MouseEvent) => void;
  // 宫格项的自定义类名
  itemClass?: string[];
  // 宫格项的自定义样式
  itemStyle?: CSSProperties;
}