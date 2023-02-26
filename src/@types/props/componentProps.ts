import type { ComponentPropsWithoutRef } from "react";

export type ComponentPropsWithoutRefAndChildren<
  T extends React.ElementType<any>
> = Omit<ComponentPropsWithoutRef<T>, "children">;
