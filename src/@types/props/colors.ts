import type { CSSProp } from "../../utils";
import type { ColorsType } from "../colors";

export type TextColorComponentProps = CSSProp<
  ColorsType,
  "textColor"
>;
export type BackgroundColorComponentProps = CSSProp<
  ColorsType,
  "backgroundColor"
>;

export type ColorComponentProps = TextColorComponentProps &
  BackgroundColorComponentProps;
