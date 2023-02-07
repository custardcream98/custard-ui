import { css } from "@emotion/react";
import type {
  MarginAllComponentProps,
  MarginXComponentProps,
  MarginYComponentProps,
  PaddingAllComponentProps,
  PaddingXComponentProps,
  PaddingYComponentProps,
  Spacings,
} from "../../@types";
import type { CSSValue } from "../../utils";
import { resolveNumaricStyle } from "../../utils";
import { theme } from "../theme";

const isDefinedSpacing = (
  spacing: CSSValue<Spacings>
): spacing is Spacings =>
  typeof spacing === "string" && spacing in theme.spacing;

const cssSpacingY = ({
  marginTop,
  marginBottom,
  paddingTop,
  paddingBottom,
}: MarginYComponentProps & PaddingYComponentProps) =>
  css`
    ${marginTop &&
    css`
      margin-top: ${isDefinedSpacing(marginTop)
        ? theme.spacing[marginTop]
        : resolveNumaricStyle(marginTop)};
    `}
    ${marginBottom &&
    css`
      margin-bottom: ${isDefinedSpacing(marginBottom)
        ? theme.spacing[marginBottom]
        : resolveNumaricStyle(marginBottom)};
    `}
    ${paddingTop &&
    css`
      padding-top: ${isDefinedSpacing(paddingTop)
        ? theme.spacing[paddingTop]
        : resolveNumaricStyle(paddingTop)};
    `}
    ${paddingBottom &&
    css`
      padding-bottom: ${isDefinedSpacing(paddingBottom)
        ? theme.spacing[paddingBottom]
        : resolveNumaricStyle(paddingBottom)};
    `}
  `;

const cssSpacingX = ({
  marginRight,
  marginLeft,
  paddingRight,
  paddingLeft,
}: MarginXComponentProps & PaddingXComponentProps) =>
  css`
    ${marginRight &&
    css`
      margin-right: ${isDefinedSpacing(marginRight)
        ? theme.spacing[marginRight]
        : resolveNumaricStyle(marginRight)};
    `}
    ${marginLeft &&
    css`
      margin-left: ${isDefinedSpacing(marginLeft)
        ? theme.spacing[marginLeft]
        : resolveNumaricStyle(marginLeft)};
    `}
    ${paddingRight &&
    css`
      padding-right: ${isDefinedSpacing(paddingRight)
        ? theme.spacing[paddingRight]
        : resolveNumaricStyle(paddingRight)};
    `}
    ${paddingLeft &&
    css`
      padding-left: ${isDefinedSpacing(paddingLeft)
        ? theme.spacing[paddingLeft]
        : resolveNumaricStyle(paddingLeft)};
    `}
  `;

const cssSpacing = ({
  margin,
  padding,
}: MarginAllComponentProps & PaddingAllComponentProps) =>
  css`
    ${margin &&
    css`
      margin: ${isDefinedSpacing(margin)
        ? theme.spacing[margin]
        : resolveNumaricStyle(margin)};
    `}
    ${padding &&
    css`
      padding: ${isDefinedSpacing(padding)
        ? theme.spacing[padding]
        : resolveNumaricStyle(padding)};
    `}
  `;

export { cssSpacingY, cssSpacingX, cssSpacing };
