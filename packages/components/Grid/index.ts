import Grid from "./src/Grid.vue";
import GridItem from "./src/GridItem.vue";
import {withInstall} from "@xuyou-element/utils";

export const xyGrid = withInstall(Grid);
export const xyGridItem = withInstall(GridItem);
export * from "./src/types";