import { css } from "@emotion/react";

const fonts = css`
  @font-face {
    font-family: "Pretendard";
    font-weight: 800;
    font-display: swap;
    src: local("Pretendard ExtraBold"),
      url("../assets/Pretendard/Pretendard-Black.subset.woff2")
        format("woff2"),
      url("../assets/Pretendard/Pretendard-ExtraBold.subset.woff")
        format("woff");
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 600;
    font-display: swap;
    src: local("Pretendard SemiBold"),
      url("../assets/Pretendard/Pretendard-SemiBold.subset.woff2")
        format("woff2"),
      url("../assets/Pretendard/Pretendard-SemiBold.subset.woff")
        format("woff");
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 400;
    font-display: swap;
    src: local("Pretendard Regular"),
      url("../assets/Pretendard/Pretendard-Regular.subset.woff2")
        format("woff2"),
      url("../assets/Pretendard/Pretendard-Regular.subset.woff")
        format("woff");
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 300;
    font-display: swap;
    src: local("Pretendard Light"),
      url("../assets/Pretendard/Pretendard-Light.subset.woff2")
        format("woff2"),
      url("../assets/Pretendard/Pretendard-Light.subset.woff")
        format("woff");
  }

  * {
    font-family: "Pretendard", -apple-system,
      BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
      Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
`;

const globalStyle = css`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* custom */
  a {
    text-decoration: none;
    color: inherit;
  }
  input,
  button {
    padding: 0;
    border: none;
    background: none;
    font-size: inherit;
    font: inherit;
  }
  button {
    cursor: pointer;
  }
  button:disabled {
    cursor: initial;
  }

  ol,
  ul {
    list-style: none;
  }

  input::placeholder,
  textarea::placeholder {
    font-size: inherit;
    font-family: inherit;
  }

  ${fonts}
`;

export default globalStyle;
