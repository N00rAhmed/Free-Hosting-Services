import Link from "next/link";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="links-container">
      <Link className="nav-link" href="/">
        Home
      </Link>
      <Link className="nav-link" href="/about">
        About
      </Link>
      <Link className="nav-link" href="/resources">
        Resources
      </Link>
    </nav>
  );
}
