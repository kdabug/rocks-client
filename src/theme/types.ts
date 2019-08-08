export interface ITheme extends IThemeColors {
  font: PrimaryFont;
}

export type PrimaryFont = "Helvetica, Arial";

export interface IThemeColors {
  white: "#FFFFFF";
  lightGrey: "#B5B5B5";
  grey: "#888787";
  darkGrey: "#3E3E3E";
  primary1: "#91F9E5";
  primary2: "#76F7BF";
  primary3: "#5FDD9D";
  primary4: "#499167";
  primary5: "#3F4531";
  red: "#C32020";
  brown: "#964444";
  straw: "#D8D174";
  scrollbarBg: "rgba(95,95,95,0.24)";
  hoverBg: "rgba(216, 87, 135, 0.75)";
}

export type StyleReset = `
  * {
      box-sizing: border-box;
  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
  }
  
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
      display: block;
  }
  body {
      line-height: 1;
  }
  ol, ul {
      list-style: none;
  }
  blockquote, q {
      quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
      content: '';
      content: none;
  }
  table {
      border-collapse: collapse;
      border-spacing: 0;
  }`;
