import type { Hierarchy } from "./hierarchy";

export type Palette = Record<
  Hierarchy,
  { main: string; text: string }
>;
