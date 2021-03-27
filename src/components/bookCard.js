import React, { useContext } from "react";
import { ThemeContext } from "../contexts/themeContextProvider";
function BookCard({ title, image }) {
  const { isDarkTheme, lightColors, darkColors } = useContext(ThemeContext);

  return (
    <div
      className="book-card"
      style={{
        border: isDarkTheme
          ? `1px solid ${darkColors.color}`
          : "1px solid #00000000",
      }}
    >
      <div className="book-image-wrapper">
        <img src={image} />
      </div>
      <p>{title}</p>
    </div>
  );
}

export default BookCard;
