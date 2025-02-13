import type {Component} from "vue";

export type LinkType = "primary" | "success" | "warning" | "danger" | "info" | "default";
export type LinkSize = "large" | "default" | "small" | "tiny";
export type LinkTarget = "_blank" | "_parent" | "_self" | "_top";

export interface LinkProps {
  type?: LinkType;
  underline?: boolean;
  disabled?: boolean;
  href?: string;
  title?: string;
  target?: LinkTarget;
  size?: LinkSize;
  icon?: string | Component;
  color?: string;
}