import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import { theme } from "./theme";
import { GlobalStyles } from "./theme/globalStyle";
import { ThemeProvider } from "./theme/styledComponent";

ReactDOM.render(
  <Router>
    <ThemeProvider theme={theme}>
      <>
        <App />
        <GlobalStyles />
      </>
    </ThemeProvider>
  </Router>,
  document.getElementById("root")
);

// export const themeColors: IThemeColors = {
//   white: '#ffffff',
//   orange: '#ff614b',
//   lightGrey: '#B5B5B5',
//   darkGrey: '#3E3E3E'
//};
//https://github.com/dam-mad/magistrate.git
