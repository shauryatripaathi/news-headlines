import { Link } from "react-router-dom"
import { Outlet } from "react-router"
import './style.css'

export default function Layout() {
    return(
    <div>
        <nav>
            <ul className="newsCategories">
                <li><Link to = '/'>HOME</Link></li>
                <li><Link to = '/business'>BUSINESS</Link></li>
                <li><Link to = '/science'>SCI & TECH</Link></li>
                <li><Link to = '/movies'>MOVIES</Link></li>
                <li><Link to = 'health'>HEALTH</Link></li>
            </ul>
        </nav>
        <Outlet />
    </div>
    )
}