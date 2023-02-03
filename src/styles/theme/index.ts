import { colors, palette } from "./colors";
import { spacing, fontSizes, fontWeights } from "./units";
import { shape } from "./shape";

import type { Theme } from "../../@types";

const theme: Theme = {
  colors,
  palette,
  spacing,
  fontSizes,
  fontWeights,
  shape,
} as const;

export {
  theme,
  colors,
  palette,
  spacing,
  fontSizes,
  fontWeights,
  shape,
};
