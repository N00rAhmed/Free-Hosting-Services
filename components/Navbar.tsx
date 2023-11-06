import Link from "next/link"
import '../components/navbar.css';
// import '../app/navbar.css'

export default function Navbar() {
  return (
    <div className="links-container">
        <a><Link href='/'>home</Link></a>
        <a><Link href='/about'>about</Link></a>
        <a><Link href='/resources'>resources</Link></a>

    </div>
  )
}
