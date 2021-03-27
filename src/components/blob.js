import React, { useState, useContext } from "react";
import { ThemeContext } from "../contexts/themeContextProvider";

function randomNum() {
  return Math.floor(Math.random() * 100);
}

function Blob() {
  const { isDarkTheme } = useContext(ThemeContext);
  const [borderRad, setBorderRad] = useState(
    "25% 28% 50% 59% / 95% 92% 90% 91%"
  );

  //   useEffect(() => {
  //     setInterval(() => {
  //       const s = randomStringOfRadius();
  //       console.log(s);
  //       setBorderRad(s);
  //     }, 500);
  //   }, []);

  const randomStringOfRadius = () => {
    return `${randomNum()}% ${randomNum()}% ${randomNum()}% ${randomNum()}% / ${
      100 - randomNum()
    }% ${100 - randomNum()}% ${100 - randomNum()}% ${100 - randomNum()}%`;
  };

  return (
    <div
      className="blob-container"
      onMouseDown={() => {
        const s = randomStringOfRadius();
        setBorderRad(s);
      }}
    >
      <div
        className="blob"
        style={{
          borderRadius: borderRad,
          boxShadow: isDarkTheme
            ? "0 0 25px rgba(255, 255, 255, 0.3)"
            : "0 0 25px rgba(0, 0, 0, 0.3)",
        }}
      >
        <div
          className="blob-image"
          style={{ backgroundImage: "url(https://picsum.photos/200)" }}
        ></div>
      </div>
    </div>
  );
}

export default Blob;
