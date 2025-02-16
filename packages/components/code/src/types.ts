export type CodeTheme = "light" | "dark";

export interface CodeProps {
  // 传入的字符串
  code?: string;
  // 显示代码预览
  showcase?: boolean;
  // 代码语言
  language?: string;
  // 显示行号
  showLineNumbers?: boolean;
  // 格式化代码
  format?: boolean;
  // 自动换行
  wrap?: boolean;
  // 显示网格线
  gridlines?: boolean;
  // 主题
  theme?: CodeTheme;
  // 显示编辑按钮
  showEditButton?: boolean;
  // 显示复制按钮
  showCopyButton?: boolean;
  // 显示折叠按钮
  showCollapseButton?: boolean;
  // 默认折叠
  collapsed?: boolean;
  // 自定义扩展按钮
  buttons?: { icon: string[], onClick?: () => void }[];
}

export interface CodeEmits {
  (e: 'update:collapsed', value: boolean): void;
}