import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { GlobalStyle } from "./style/Globalstyle";
import { defaultTheme } from "./style/themes/default";
import { ThemeProvider } from "styled-components";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <App />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>
);
