export type Spacings =
  | "none"
  | "xxsmall"
  | "xsmall"
  | "small"
  | "medium"
  | "gutter"
  | "large"
  | "xlarge"
  | "xxlarge";
export type SpacingsMap = {
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
export type SpacingsMapType = keyof SpacingsMap;

export type FontSizes =
  | "xsmall"
  | "small"
  | "medium"
  | "large"
  | "xlarge"
  | "xxlarge";
export type FontSizesMap = Record<FontSizes, string>;
export type FontSizesMapType = keyof FontSizesMap;

export type Sizes =
  | "xsmall"
  | "small"
  | "medium"
  | "large"
  | "xlarge";
export type SizesMap = Record<Sizes, string>;
export type SizesMapType = keyof Sizes;

export type FontWeights =
  | "light"
  | "regular"
  | "semiBold"
  | "extraBold";
export type FontWeightsMap = Record<FontWeights, string>;
export type FontWeightsMapType = keyof FontWeightsMap;
