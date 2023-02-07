export type NeverAll<T extends {}> = {
  [P in keyof T]-?: never;
};

export type CSSValue<T> = T extends string ? T | number : T;
export type CSSProp<T, Key extends string> = {
  [P in Key]?: CSSValue<T>;
};
