import { Link } from "react-router-dom"
import { Outlet } from "react-router"
import './style.css'

export default function Layout() {

    return (
        <div>
            <nav>
                <ul className="newsCategories">
                    <li><Link to='/' className="linkStyling">HOME</Link></li>
                    <li><Link to='/world' className="linkStyling">WORLD</Link></li>
                    <li><Link to='/business' className="linkStyling">BUSINESS</Link></li>
                    <li><Link to='/sports' className="linkStyling">SPORTS</Link></li>
                    <li><Link to='/science' className="linkStyling">SCI & TECH</Link></li>
                    <li><Link to='health' className="linkStyling">HEALTH</Link></li>
                    <li><Link to='/movies' className="linkStyling">ENTERTAINMENT</Link></li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}