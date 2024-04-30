import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      {/* NavLink for the Home page */}
      <NavLink to="/" className={({ isActive }) => isActive ? "active" : undefined}>
        Home
      </NavLink>

      {/* NavLink for the Directors page */}
      <NavLink to="/directors" className={({ isActive }) => isActive ? "active" : undefined}>
        Directors
      </NavLink>

      {/* NavLink for the Actors page */}
      <NavLink to="/actors" className={({ isActive }) => isActive ? "active" : undefined}>
        Actors
      </NavLink>
    </nav>
  );
};

export default NavBar;
