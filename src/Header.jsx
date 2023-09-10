import { Link } from "react-router-dom";
import { LogoutLink } from "./Logoutlink";
import { Signup } from "./Signup";

export function Header() {
  return (
    <header>
      <nav>
        <a href="#">Home</a> | <a href="#">Link</a>
      </nav>
    </header>
  );
}
