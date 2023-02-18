import type { ColorsType } from "../@types";
import { theme } from "../styles";

/**
 * 색상에 투명도를 적용합니다.
 */
const transparentColor = (
  color: ColorsType,
  transparency: number
) => {
  if (transparency < 0 || transparency > 255) {
    throw new Error(
      "transparency must be between 0 and 255."
    );
  }

  const transparencyString = transparency
    .toString(16)
    .padStart(2, "0");

  return theme.colors[color] + transparencyString;
};

export default transparentColor;
