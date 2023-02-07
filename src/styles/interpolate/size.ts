import { css } from "@emotion/react";
import type { CSSProp } from "../../utils";
import { resolveNumaricStyle } from "../../utils";

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

export { cssBoxSize };
