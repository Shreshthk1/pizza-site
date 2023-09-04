import {Link} from 'react-router-dom'


export default function NavBar (props) {
    return(
        <nav>
            <span className="logo">
                {/* <!-- Logo from https://www.pngegg.com/en/png-zjmhj --> */}
                <img src="./images/logo.png" alt="Logo" width={"15%"}></img>
                <h1>SliceRite</h1>
            </span>
            <span className="links">
                <Link to="/order">
                    Order
                </Link>
                <Link to="/find a store">
                    Find a location
                </Link>
                <Link to="/contact.html">
                    Contact Us
                </Link>
            </span>
        </nav>
    )
}