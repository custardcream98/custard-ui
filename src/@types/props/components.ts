import type { NeverAll } from "../../utils";
import type { ColorComponentProps } from "./colors";
import type {
  MarginComponentProps,
  MarginXComponentProps,
  MarginYComponentProps,
  PaddingComponentProps,
  PaddingXComponentProps,
  PaddingYComponentProps,
} from "./spacings";

export type InlineLevelComponentProps =
  ColorComponentProps &
    MarginXComponentProps &
    PaddingXComponentProps & {
      width?: string | number;
      height?: never;
    } & NeverAll<MarginYComponentProps> &
    NeverAll<PaddingYComponentProps>;

export type BlockComponentProps = ColorComponentProps &
  MarginComponentProps &
  PaddingComponentProps & {
    width?: string | number;
    height?: string | number;
  };
