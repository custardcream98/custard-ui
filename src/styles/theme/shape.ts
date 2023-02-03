import { Shape } from "../../@types";

const shape: Shape = {
  borderRadius: {
    xsmall: "2px",
    small: "3px",
    medium: "5px",
    large: "10px",
    xlarge: "15px",
    rounded: "9999px",
  },
  shadows: {
    default: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
    none: "none",
    outlined:
      "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
    heavy:
      "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
    light: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px",
    inset:
      "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;",
  },
} as const;

export { shape };
