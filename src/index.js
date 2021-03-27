import React from "react";
import { render } from "react-dom";
import App from "./app";
import ThemeContextProvider from "./contexts/themeContextProvider";

render(
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>,
  document.querySelector("#app")
);
