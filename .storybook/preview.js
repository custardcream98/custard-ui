import { Global } from "@emotion/react";
import { globalStyle } from "../src";

export const decorators = [
  (Story) => (
    <>
      <Global styles={globalStyle} />
      <Story />
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
