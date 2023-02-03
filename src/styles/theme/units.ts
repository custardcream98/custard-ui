import { FontSizes, Spacing } from "../../@types";

const spacing: Spacing = {
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

const fontSizes: FontSizes = {
  xsmall: "0.79rem",
  small: "0.889rem",
  medium: "1rem",
  large: "1.125rem",
  xlarge: "1.266rem",
  xxlarge: "1.424rem",
} as const;

export { spacing, fontSizes };
