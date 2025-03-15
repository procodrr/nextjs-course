"use client"; // <--- important to mark this as a Client Component

import Link from "next/link";
import { usePathname } from "next/navigation"; // for checking current route
import SunIcon from "./SunIcon";
import MoonIcon from "./MoonIcon";
import { useTheme } from "@/context/ThemeContext";

export default function Header() {
  const pathname = usePathname();
  const { isDark, toggleTheme } = useTheme();
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link
            href="/"
            className={pathname === "/" ? "nav-link active" : "nav-link"}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={pathname === "/about" ? "nav-link active" : "nav-link"}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/services"
            className={
              pathname === "/services" ? "nav-link active" : "nav-link"
            }
          >
            Services
          </Link>
        </li>
      </ul>

      <button onClick={toggleTheme}>
        {isDark ? <SunIcon /> : <MoonIcon />}
      </button>
    </nav>
  );
}
