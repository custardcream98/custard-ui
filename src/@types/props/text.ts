import type { CSSProperties } from "react";
import type { FontSizes, FontWeights } from "../units";

export type TextProps = {
  fontSize?: FontSizes | number;
  fontWeight?: FontWeights | number;
  textAlign?: CSSProperties["textAlign"];
  textTransform?: CSSProperties["textTransform"];
};
