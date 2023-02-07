import type { CSSProp } from "../../utils";
import type {
  BorderRadiusType,
  ShadowType,
} from "../shape";

export type BorderRadiusComponentProps = CSSProp<
  BorderRadiusType,
  "borderRadius"
>;

export type ShadowComponentProps = {
  boxShadow?: ShadowType;
};
