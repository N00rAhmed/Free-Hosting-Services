import Link from "next/link"
// import '../components/navbar.css';
import '../app/navbar.css'

export default function Navbar() {
  return (
    <div className="links-container">
        <p>navbar</p>
        <Link href='/about'>about</Link>

    </div>
  )
}
