import { Home } from "./pages/Home";

import { GlobalStyle } from "./style/Globalstyle";
import { defaultTheme } from "./style/themes/default";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Home />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
