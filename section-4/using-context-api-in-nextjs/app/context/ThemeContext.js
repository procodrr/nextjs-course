"use client";

import { createContext, useContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export default function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(true);

  function toggleTheme() {
    setIsDark((prev) => !prev);
  }

  useEffect(() => {
    const storedTheme = Boolean(+localStorage.getItem("isDark"));
    console.log(storedTheme);
    setIsDark(storedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem("isDark", Number(isDark));
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
