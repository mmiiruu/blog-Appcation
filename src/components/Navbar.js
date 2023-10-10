import "./Navbar.css"
import { Link } from "react-router-dom"
export default function Navbar() {
    return(
        <nav>
            <Link to="/" className="logo">Blogs Application</Link>
            <Link to="/">หน้าแรก</Link>
            <Link to="/about">เกี่ยวกับ</Link>
            <Link to="/blogs">บทความ</Link>
        </nav>
    )
}