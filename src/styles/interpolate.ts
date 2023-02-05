import { css } from "@emotion/react";
import { CSSProperties } from "@emotion/serialize";
import { isNumber } from "lodash";
import type {
  ColorComponentProps,
  ColorsType,
  FontSizes,
  FontWeights,
  MarginXComponentProps,
  MarginYComponentProps,
  PaddingXComponentProps,
  PaddingYComponentProps,
  Spacings,
} from "../@types";
import { resolveNumaricStyle } from "../utils";
import { theme } from "./theme";

type CSSValue<T> = T extends string ? T | number : T;
type CSSProp<T, Key extends string> = {
  [P in Key]?: CSSValue<T>;
};

const isDefinedFontSize = (
  fontSize: CSSValue<FontSizes>
): fontSize is FontSizes =>
  typeof fontSize === "string" &&
  fontSize in theme.fontSizes;
const cssFontSize = ({
  fontSize,
}: CSSProp<FontSizes, "fontSize">) =>
  fontSize &&
  css`
    font-size: ${isDefinedFontSize(fontSize)
      ? theme.fontSizes[fontSize]
      : resolveNumaricStyle(fontSize)};
  `;

const isDefinedFontWeight = (
  fontWeight: CSSValue<FontWeights>
): fontWeight is FontWeights =>
  typeof fontWeight === "string" &&
  fontWeight in theme.fontWeights;
const cssFontWeight = ({
  fontWeight,
}: CSSProp<FontWeights, "fontWeight">) =>
  fontWeight &&
  css`
    font-weight: ${isDefinedFontWeight(fontWeight)
      ? theme.fontWeights[fontWeight]
      : isNumber(fontWeight)
      ? fontWeight
      : theme.fontWeights.regular};
  `;

const cssTextAlign = ({
  textAlign,
}: CSSProp<CSSProperties["textAlign"], "textAlign">) =>
  textAlign &&
  css`
    text-align: ${textAlign};
  `;
const cssTextTransform = ({
  textTransform,
}: CSSProp<
  CSSProperties["textTransform"],
  "textTransform"
>) =>
  textTransform &&
  css`
    text-transform: ${textTransform};
  `;

const isDefinedColor = (
  color: string
): color is ColorsType =>
  typeof color === "string" && color in theme.colors;
const cssColor = ({
  textColor,
  backgroundColor,
}: ColorComponentProps) =>
  `
    ${
      textColor &&
      css`
        color: ${isDefinedColor(textColor)
          ? theme.colors[textColor]
          : textColor};
      `
    }
    ${
      backgroundColor &&
      css`
        background-color: ${isDefinedColor(backgroundColor)
          ? theme.colors[backgroundColor]
          : backgroundColor};
      `
    }
  `;

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
  `
    ${
      marginTop &&
      css`
        margin-top: ${isDefinedSpacing(marginTop)
          ? theme.spacing[marginTop]
          : resolveNumaricStyle(marginTop)};
      `
    }
    ${
      marginBottom &&
      css`
        margin-bottom: ${isDefinedSpacing(marginBottom)
          ? theme.spacing[marginBottom]
          : resolveNumaricStyle(marginBottom)};
      `
    }
    ${
      paddingTop &&
      css`
        padding-top: ${isDefinedSpacing(paddingTop)
          ? theme.spacing[paddingTop]
          : resolveNumaricStyle(paddingTop)};
      `
    }
    ${
      paddingBottom &&
      css`
        padding-bottom: ${isDefinedSpacing(paddingBottom)
          ? theme.spacing[paddingBottom]
          : resolveNumaricStyle(paddingBottom)};
      `
    }
  `;
const cssSpacingX = ({
  marginRight,
  marginLeft,
  paddingRight,
  paddingLeft,
}: MarginXComponentProps & PaddingXComponentProps) =>
  `
    ${
      marginRight &&
      css`
        margin-right: ${isDefinedSpacing(marginRight)
          ? theme.spacing[marginRight]
          : resolveNumaricStyle(marginRight)};
      `
    }
    ${
      marginLeft &&
      css`
        margin-left: ${isDefinedSpacing(marginLeft)
          ? theme.spacing[marginLeft]
          : resolveNumaricStyle(marginLeft)};
      `
    }
    ${
      paddingRight &&
      css`
        padding-right: ${isDefinedSpacing(paddingRight)
          ? theme.spacing[paddingRight]
          : resolveNumaricStyle(paddingRight)};
      `
    }
    ${
      paddingLeft &&
      css`
        padding-left: ${isDefinedSpacing(paddingLeft)
          ? theme.spacing[paddingLeft]
          : resolveNumaricStyle(paddingLeft)};
      `
    }
  `;

const cssBoxSize = ({
  width,
  height,
}: CSSProp<string | number, "width"> &
  CSSProp<string | number, "height">) =>
  `
    ${
      width &&
      css`
        width: ${resolveNumaricStyle(width)};
      `
    }
    ${
      height &&
      css`
        height: ${resolveNumaricStyle(height)};
      `
    }
  `;

export {
  cssFontSize,
  cssFontWeight,
  cssSpacingX,
  cssSpacingY,
  cssTextAlign,
  cssTextTransform,
  cssColor,
  cssBoxSize,
};
