import Link from "next/link"
import './navbar.css';

export default function Navbar() {
  return (
    <div className="links-container">
        <Link className="card" href='/'><p>Home</p></Link>
        <Link className="card" href='/about'><p>About</p></Link>
        <Link className="card" href='/resources'><p>Resources</p></Link>
    </div>
  )
}
