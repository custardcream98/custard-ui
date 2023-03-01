import { Global } from "@emotion/react";
import { globalStyle, theme } from "../src";

export const decorators = [
  (Story, context) => (
    <>
      <Global styles={globalStyle} />
      <Story {...context} />
    </>
  ),
];
