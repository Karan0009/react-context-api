import React, { useContext } from "react";
import { ThemeContext } from "../contexts/themeContextProvider";
function Test() {
  const data = useContext(ThemeContext);
  console.log(data);
  return <div>{data.testString}</div>;
}

export default Test;
{
}
