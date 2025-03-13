import type {CSSProperties} from "vue";

export type RowDirection =
  | "row"
  | "row-reverse"
  ;
export type RowAlign =
  | "flex-start"
  | "flex-end"
  | "center"
  ;
export type RowJustify =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly"
  ;
export type ColAlignSelf =
  | "auto"
  | "flex-start"
  | "flex-end"
  | "center"
  ;
export type ColAlign = RowAlign;
export type ColJustify = RowJustify;

export interface ColResponsive {
  // 栅格的占位格数, 可选值为 `0 ~ 24`, 默认值为 `24`
  span?: number;
  // 是否隐藏该列, 相当于 `display:none`
  hidden?: boolean;
  // 项目布局属性, 默认值为 `0 1 auto`, `flex-grow, flex-shrink 和 flex-basis` 的缩写
  flex?: number | string;
  // 栅格的排列顺序, 数值越小, 排列越靠前
  order?: number;
  // 栅格左侧的间隔格数, 间隔内不可以有栅格
  offset?: number;
  // 栅格向右移动格数
  push?: number;
  // 栅格向左移动格数
  pull?: number;
  // 单个栅栏在交叉轴上的对齐方式, 默认值为 `auto`, 类似于 `align-self`
  alignSelf?: ColAlignSelf;
  // 容器垂直对齐方式, 类似于 `align-items`
  align?: ColAlign;
  // 容器水平排列方式, 类似于 `justify-content`
  justify?: ColJustify;
}

export interface RowProps {
  // 主轴方向, 默认值为 `row`, 类似于 `flex-direction`
  direction?: RowDirection;
  // 是否换行, 类似于 `flex-wrap`
  wrap?: boolean;
  // 容器垂直对齐方式, 类似于 `align-items`
  align?: RowAlign;
  // 容器水平排列方式, 类似于 `justify-content`
  justify?: RowJustify;
  // 栅格之间的间距, 单位 `px`, 类似于 `gap`
  gap?: number;
  // 自定义类名
  rowClass?: string[];
  // 自定义内联样式
  rowStyle?: CSSProperties;
  // 点击事件
  onClick?: (event: MouseEvent) => void;
}

export interface ColProps {
  // 栅格的占位格数, 可选值为 `0 ~ 24`, 默认值为 `24`
  span?: number;
  // 是否隐藏该列, 相当于 `display:none`
  hidden?: boolean;
  // 项目布局属性, 默认值为 `0 1 auto`, `flex-grow, flex-shrink 和 flex-basis` 的缩写
  flex?: number | string;
  // 栅格的排列顺序, 数值越小, 排列越靠前
  order?: number;
  // 栅格左侧的间隔格数, 间隔内不可以有栅格
  offset?: number;
  // 栅格向右移动格数
  push?: number;
  // 栅格向左移动格数
  pull?: number;
  // 单个栅栏在交叉轴上的对齐方式, 默认值为 `auto`, 类似于 `align-self`
  alignSelf?: ColAlignSelf;
  // 容器垂直对齐方式, 类似于 `align-items`
  align?: ColAlign;
  // 容器水平排列方式, 类似于 `justify-content`
  justify?: ColJustify;
  // 响应式布局配置
  responsive?: {
    // `< 576 px`
    xs?: ColResponsive;
    // `>= 576 px`
    sm?: ColResponsive;
    // `>= 768 px`
    md?: ColResponsive;
    // `>= 992 px`
    lg?: ColResponsive;
    // `>= 1200 px`
    xl?: ColResponsive;
    // `>= 1600 px`
    xxl?: ColResponsive;
  };
  // 自定义类名
  colClass?: string[];
  // 自定义内联样式
  colStyle?: CSSProperties;
  // 点击事件
  onClick?: (event: MouseEvent) => void;
}