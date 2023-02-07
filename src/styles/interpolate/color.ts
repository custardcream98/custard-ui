import { css } from "@emotion/react";
import type {
  ColorComponentProps,
  ColorsType,
} from "../../@types";
import { theme } from "../theme";

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

export { cssColor };
