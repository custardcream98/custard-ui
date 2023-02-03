import { Colors } from "./colors";
import { Palette } from "./palette";
import { Shape } from "./shape";
import {
  FontSizesMap,
  FontWeightsMap,
  SpacingsMap,
} from "./units";

export type Theme = {
  colors: Colors;
  palette: Palette;
  spacing: SpacingsMap;
  fontSizes: FontSizesMap;
  fontWeights: FontWeightsMap;
  shape: Shape;
};

export type ThemeType = keyof Theme;
