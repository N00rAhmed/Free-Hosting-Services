import Link from "next/link"
import './navbar.css';

export default function Navbar() {
  return (
    <div className="links-container">
        <Link className="card" href='/'><p>home</p></Link>
        <Link className="card" href='/about'><p>about</p></Link>
        <Link className="card" href='/resources'><p>resources</p></Link>

    </div>
  )
}
