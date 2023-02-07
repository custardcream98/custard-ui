import { css } from "@emotion/react";
import { CSSProperties } from "@emotion/serialize";
import { isNumber } from "lodash";
import type { FontSizes, FontWeights } from "../../@types";
import type { CSSProp, CSSValue } from "../../utils";
import { resolveNumaricStyle } from "../../utils";
import { theme } from "../theme";

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

export {
  cssFontSize,
  cssFontWeight,
  cssTextAlign,
  cssTextTransform,
};
