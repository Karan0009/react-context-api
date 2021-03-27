import React, { useState, createContext } from "react";

export const ThemeContext = createContext();

function ThemeContextProvider(props) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [lightColors, setLightColors] = useState({
    background: "#fafafa",
    color: "#000000",
  });
  const [darkColors, setDarkColors] = useState({
    background: "#000000",
    color: "#fafafa",
  });
  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeContext.Provider
      value={{ isDarkTheme, changeTheme, lightColors, darkColors }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
