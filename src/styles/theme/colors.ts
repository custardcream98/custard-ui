import { Colors, Palette } from "../../@types";

/**
 * 전역적으로 사용되는 색상을 정의합니다.
 */
const colors: Colors = {
  white: "#FFFFFF",
  black: "#393939",
  primary: "#FFA500",
  secondary: "#5b52fb",
  orange: "#FFA500",
  orange100: "#fff4e6",
  orange200: "#ffe8cc",
  orange300: "#ffdbb3",
  orange400: "#ffcc99",
  orange500: "#ffb380",
  orange600: "#ff9933",
  orange700: "#e68a00",
  orange800: "#cc7a00",
  orange900: "#b36b00",
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
