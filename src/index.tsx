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
