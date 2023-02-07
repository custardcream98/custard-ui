import { css } from "@emotion/react";
import type {
  BorderRadiusType,
  BorderRadiusComponentProps,
  ShadowType,
  ShadowComponentProps,
} from "../../@types";
import type { CSSValue } from "../../utils";
import { theme } from "../theme";

const isDefinedBorderRadius = (
  borderRadius: CSSValue<BorderRadiusType>
): borderRadius is BorderRadiusType =>
  typeof borderRadius === "string" &&
  borderRadius in theme.shape.borderRadius;

const cssBorderRadius = ({
  borderRadius,
}: BorderRadiusComponentProps) =>
  borderRadius &&
  css`
    border-radius: ${isDefinedBorderRadius(borderRadius)
      ? theme.shape.borderRadius[borderRadius]
      : borderRadius};
  `;

const isDefinedShadow = (
  shadow: ShadowType | string
): shadow is ShadowType =>
  typeof shadow === "string" &&
  shadow in theme.shape.shadows;

const cssShadow = ({ boxShadow }: ShadowComponentProps) =>
  boxShadow &&
  css`
    box-shadow: ${isDefinedShadow(boxShadow)
      ? theme.shape.shadows[boxShadow]
      : boxShadow};
  `;

export { cssBorderRadius, cssShadow };
