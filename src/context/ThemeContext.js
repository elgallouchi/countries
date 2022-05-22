import { createContext, useEffect, useState } from "react";

const darkStyle = { dark: true };
export const ThemeContext = createContext(darkStyle);

import React from "react";

export default function ThemeContextProvider(props) {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme")) === true ? true : false
  );

  const toggleTheme = () => {
    localStorage.setItem("theme", !theme);
    setTheme(!theme);
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
