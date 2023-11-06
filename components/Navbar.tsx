import Link from "next/link"
import '../components/navbar.css';
// import '../app/navbar.css'

export default function Navbar() {
  return (
    <div className="links-container">
        <a><Link className="card" href='/'>home</Link></a>
        <a><Link className="card" href='/about'>about</Link></a>
        <a><Link className="card" href='/resources'>resources</Link></a>

    </div>
  )
}
