import {
  FontSizesMap,
  FontWeightsMap,
  SpacingsMap,
} from "../../@types";

const spacing: SpacingsMap = {
  none: 0,
  xxsmall: "4px",
  xsmall: "8px",
  small: "12px",
  medium: "20px",
  gutter: "24px",
  large: "32px",
  xlarge: "48px",
  xxlarge: "96px",
} as const;

const fontSizes: FontSizesMap = {
  xsmall: "0.79rem",
  small: "0.889rem",
  medium: "1rem",
  large: "1.125rem",
  xlarge: "1.266rem",
  xxlarge: "1.424rem",
} as const;

const fontWeights: FontWeightsMap = {
  light: "300",
  regular: "400",
  semiBold: "600",
  extraBold: "800",
};
export { spacing, fontSizes, fontWeights };
