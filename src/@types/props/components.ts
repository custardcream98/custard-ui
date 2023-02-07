import type { NeverAll } from "../../utils";
import type { ColorComponentProps } from "./colors";
import type {
  BorderRadiusComponentProps,
  ShadowComponentProps,
} from "./shapes";
import type {
  MarginComponentProps,
  MarginXComponentProps,
  MarginYComponentProps,
  PaddingComponentProps,
  PaddingXComponentProps,
  PaddingYComponentProps,
} from "./spacings";

type ComponentProps = ColorComponentProps &
  ShadowComponentProps &
  BorderRadiusComponentProps;

export type InlineLevelComponentProps = ComponentProps &
  MarginXComponentProps &
  PaddingXComponentProps & {
    width?: string | number;
    height?: never;
  } & NeverAll<MarginYComponentProps> &
  NeverAll<PaddingYComponentProps>;

export type BlockComponentProps = ComponentProps &
  MarginComponentProps &
  PaddingComponentProps & {
    width?: string | number;
    height?: string | number;
  };
