import { ColorsType } from "../@types";

export type NeverAll<T extends {}> = {
  [P in keyof T]-?: never;
};

export type CSSValue<T> = T extends ColorsType
  ? T
  : T extends string
  ? T | number
  : T;
export type CSSProp<T, Key extends string> = {
  [P in Key]?: CSSValue<T>;
};
