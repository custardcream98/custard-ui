import { css } from "@emotion/react";
import type {
  BackgroundColorComponentProps,
  ColorComponentProps,
  ColorsType,
  TextColorComponentProps,
} from "../../@types";
import { theme } from "../theme";

const isDefinedColor = (
  color: string
): color is ColorsType =>
  typeof color === "string" && color in theme.colors;

const cssTextColor = ({
  textColor,
}: TextColorComponentProps) =>
  textColor &&
  css`
    color: ${isDefinedColor(textColor)
      ? theme.colors[textColor]
      : textColor};
  `;
const cssBackgroundColor = ({
  backgroundColor,
}: BackgroundColorComponentProps) =>
  backgroundColor &&
  css`
    background-color: ${isDefinedColor(backgroundColor)
      ? theme.colors[backgroundColor]
      : backgroundColor};
  `;

const cssColor = ({
  textColor,
  backgroundColor,
}: ColorComponentProps) =>
  css`
    ${cssTextColor({ textColor })}
    ${cssBackgroundColor({ backgroundColor })}
  `;

export { cssTextColor, cssBackgroundColor, cssColor };
