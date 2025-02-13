export type CodeTheme = "light" | "dark";

export interface CodeProps {
  code?: string;  // 传入的字符串
  showcase?: boolean;  // 显示代码预览
  language?: string;  // 代码语言
  showLineNumbers?: boolean;  // 显示行号
  format?: boolean;  // 格式化代码
  wrap?: boolean;  // 自动换行
  gridlines?: boolean;  // 显示网格线
  theme?: CodeTheme;  // 主题
  showEditButton?: boolean;  // 显示编辑按钮
  showCopyButton?: boolean;  // 显示复制按钮
  showCollapseButton?: boolean;  // 显示折叠按钮
  collapsed?: boolean;  // 默认折叠
  buttons?: { icon: string[], onClick?: () => void }[];  // 自定义扩展按钮
}

export interface CodeEmits {
  (e: 'update:collapsed', value: boolean): void;
}