import React, { useContext } from "react";
import Navbar from "./components/navbar";
import "./app.css";
import ThemeController from "./components/themeController";
import BookContextProvider from "./contexts/bookContextProvider";
import Books from "./components/books";
import Blob from "./components/blob";
import { ThemeContext } from "./contexts/themeContextProvider";

function App() {
  const { isDarkTheme, lightColors, darkColors } = useContext(ThemeContext);

  return (
    <div
      className="app-container"
      style={{
        minHeight: "100vh",
        background: isDarkTheme
          ? darkColors.background
          : lightColors.background,
        color: isDarkTheme ? darkColors.color : lightColors.color,
      }}
    >
      <div className="blur-overlay">
        <BookContextProvider>
          <div
            className="column"
            style={{ alignItems: "center", padding: "10px" }}
          >
            <ThemeController />
            <Navbar />
            <Blob />
            <Books />
          </div>
        </BookContextProvider>
      </div>
    </div>
  );
}

export default App;
