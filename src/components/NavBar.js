
import { NavLink } from "react-router-dom"

const Navbar = (props)=>{

    return(
        <nav className="Navbar">
            <ul>
                <li>
                    <NavLink to ="/countries"  activeClassName ="selected">Countries</NavLink>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar