import { Sizes } from "./units";

export type BorderRadius = Sizes & { rounded: "9999px" };
export type BorderRadiusType = keyof BorderRadius;

export type Shadow = {
  default: string;
  none: "none";
  outlined: string;
  heavy: string;
  light: string;
  inset: string;
};
export type ShadowType = keyof Shadow;

export type Shape = {
  borderRadius: BorderRadius;
  shadows: Shadow;
};

export type ShapeType = keyof Shape;
