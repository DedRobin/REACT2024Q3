import { Link } from "react-router-dom";
import { Path } from "../../views/router";

export default function Header() {
  return (
    <header className="header">
      <nav className="navigation">
        <ul className="links">
          <li className="link-item">
            <Link to={Path.Form}>Form</Link>
          </li>
          <li className="link-item">
            <Link to={Path.ReactHookForm}>React Hook Form</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
