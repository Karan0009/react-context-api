import React, { useState, useContext } from "react";
import { ThemeContext } from "../contexts/themeContextProvider";

function Cloud({ radius, style, classes }) {
  return (
    <div className={"cloud-body" + ` ${classes}`} style={style}>
      <div
        className="cloud-part"
        style={{
          left: "0%",
          width: radius ? radius : "15px",
          height: radius ? radius : "15px",
        }}
      ></div>
      <div
        className="cloud-part"
        style={{
          left: "-3px",
          top: "-2px",
          width: radius ? radius : "15px",
          height: radius ? radius : "15px",
        }}
      ></div>
      <div
        className="cloud-part"
        style={{
          left: "-3px",

          width: radius ? radius : "15px",
          height: radius ? radius : "15px",
        }}
      ></div>
      <div
        className="cloud-part"
        style={{
          right: "0%",

          width: radius ? radius : "15px",
          height: radius ? radius : "15px",
        }}
      ></div>
    </div>
  );
}

function Star({ style, classes }) {
  return <div className={"star" + ` ${classes}`} style={style}></div>;
}

function ThemeController() {
  const { isDarkTheme, changeTheme, testString, changeText } = useContext(
    ThemeContext
  );
  console.log(isDarkTheme);
  return (
    <div>
      <label
        className="switch"
        style={{ background: isDarkTheme ? "#2d54bd" : "#92acf5" }}
      >
        <input type="checkbox" checked={isDarkTheme} onClick={changeTheme} />
        <span className={"slider" + (isDarkTheme ? " slider-dark" : "")}></span>
        <div
          className="clouds"
          style={{
            opacity: isDarkTheme ? "0" : "1",
            transition: "200ms ease-in-out opacity",
          }}
        >
          <Cloud
            classes={isDarkTheme ? "" : "move-right-class"}
            radius={"5px"}
            style={{
              background: "yellow !important",
              top: "3px",
              right: "15px",
            }}
          />
          <Cloud
            classes={isDarkTheme ? "" : "move-right-class"}
            radius={"5px"}
            style={{
              top: "12px",
              right: "12px",
            }}
          />
          <Cloud
            classes={isDarkTheme ? "" : "move-right-class"}
            radius={"5px"}
            style={{
              top: "8px",
              right: "27px",
            }}
          />
        </div>
        <div
          className="stars"
          style={{
            opacity: isDarkTheme ? "1" : "0",
            transition: "200ms ease-in-out opacity",
          }}
        >
          <Star
            classes={!isDarkTheme ? "" : "move-left-class"}
            style={{
              top: "4px",
              left: "20px",
            }}
          />
          <Star
            classes={!isDarkTheme ? "" : "move-left-class"}
            style={{
              top: "13px",
              left: "7px",
            }}
          />
          <Star
            classes={!isDarkTheme ? "" : "move-left-class"}
            style={{
              top: "13px",
              left: "24px",
            }}
          />
        </div>
      </label>
    </div>
  );
}

export default ThemeController;
