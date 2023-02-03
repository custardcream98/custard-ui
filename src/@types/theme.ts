import { Colors } from "./colors";
import { Palette } from "./palette";
import { Shape } from "./shape";
import { FontSizes, Spacing } from "./units";

export type Theme = {
  colors: Colors;
  palette: Palette;
  spacing: Spacing;
  fontSizes: FontSizes;
  shape: Shape;
};

export type ThemeType = keyof Theme;
