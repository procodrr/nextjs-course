import { NavLink } from "react-router-dom";
import SunIcon from "./SunIcon";
import MoonIcon from "./MoonIcon";

export default function Header() {
  const isDark = true;
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Services
          </NavLink>
        </li>
      </ul>
      <button
        onClick={() => {
          console.log("Theme button clicked");
        }}
      >
        {isDark ? <SunIcon /> : <MoonIcon />}
      </button>
    </nav>
  );
}
