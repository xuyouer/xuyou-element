import type {InjectionKey} from "vue";
import type {AvatarGroupContext} from "./types";

export const AVATAR_GROUP_CONTEXT_KEY: InjectionKey<AvatarGroupContext> = Symbol(
  "AVATAR_GROUP_CONTEXT_KEY"
)