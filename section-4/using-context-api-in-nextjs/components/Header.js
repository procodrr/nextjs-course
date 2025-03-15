"use client";
import { useTheme } from "@/app/context/ThemeContext";

export default function Header() {
  const { toggleTheme } = useTheme();
  return (
    <header>
      <h2>Logo</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </header>
  );
}
