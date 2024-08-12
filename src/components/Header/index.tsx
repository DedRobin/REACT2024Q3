import { NavLink } from "react-router-dom";
import { Path } from "../../views/router";

export default function Header() {
  return (
    <header className="header">
      <nav className="navigation">
        <ul className="link-list">
          <li className="list-item form">
            <NavLink
              to={Path.Form}
              className={({ isActive }) => (isActive ? "link active" : "link")}
            >
              Form
            </NavLink>
          </li>
          <li className="list-item react-hook-form">
            <NavLink
              to={Path.ReactHookForm}
              className={({ isActive }) => (isActive ? "link active" : "link")}
            >
              React Hook Form
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
