import { Global, ThemeProvider } from "@emotion/react";
import { globalStyle, theme } from "../src";

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyle} />
      <Story />
    </ThemeProvider>
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
