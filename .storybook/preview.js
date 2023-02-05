import { Global } from "@emotion/react";
import { globalStyle, theme } from "../src";

export const decorators = [
  (Story) => (
    <>
      <Global styles={globalStyle} />
      <Story />
    </>
  ),
];
