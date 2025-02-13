import type {InjectionKey} from "vue";
import type {ButtonGroupContext} from "./types";

export const BUTTON_GROUP_CONTEXT_KEY: InjectionKey<ButtonGroupContext> = Symbol(
  "BUTTON_GROUP_CONTEXT_KEY"
)