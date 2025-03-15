import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("isDark") === "true"
  );

  function toggleTheme() {
    setIsDark((prev) => !prev);
  }

  useEffect(() => {
    localStorage.setItem("isDark", isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
