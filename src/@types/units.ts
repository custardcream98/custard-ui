export type Spacing = {
  none: 0;
  xxsmall: string;
  xsmall: string;
  small: string;
  medium: string;
  gutter: string;
  large: string;
  xlarge: string;
  xxlarge: string;
};
export type SpacingType = keyof Spacing;

export type FontSizes = {
  xsmall: string;
  small: string;
  medium: string;
  large: string;
  xlarge: string;
  xxlarge: string;
};
export type FontSizesType = keyof FontSizes;

export type Sizes = {
  xsmall: string;
  small: string;
  medium: string;
  large: string;
  xlarge: string;
};
export type SizesType = keyof Sizes;
