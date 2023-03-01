import { Colors, Palette } from "../../@types";

/**
 * 전역적으로 사용되는 색상을 정의합니다.
 */
const colors: Colors = {
  white: "#FFFFFF",
  black: "#393939",
  primary: "#FFA500",
  secondary: "#5b52fb",
  gray: "#cccccc",
  gray100: "#f8f9fa",
  gray200: "#e9ecef",
  gray300: "#dee2e6",
  gray400: "#ced4da",
  gray500: "#adb5bd",
  gray600: "#6c757d",
  gray700: "#495057",
  gray800: "#343a40",
  gray900: "#212529",
} as const;

/**
 * 각 위계에서 사용되는 색상을 정의합니다.
 */
const palette: Palette = {
  primary: {
    main: colors.primary,
    text: colors.white,
  },
  secondary: {
    main: colors.secondary,
    text: colors.white,
  },
  outline: {
    main: "transparent",
    text: colors.black,
  },
  disabled: {
    main: colors.gray,
    text: colors.black,
  },
} as const;

export { colors, palette };
