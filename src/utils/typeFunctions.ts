export type NeverAll<T extends {}> = {
  [P in keyof T]-?: never;
};
