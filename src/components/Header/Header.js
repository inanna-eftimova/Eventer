import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <Link id="logo" to="/"
            ><img id="logo-img" src="./images/logo.png" alt=""/></Link>

            <nav>
                <div>
                    <Link to="/dashboard">Events</Link>
                </div>

                <div className="user">
                    <Link to="/create">Add Event</Link>
                    <Link to="/logout">Logout</Link>
                </div>


                <div className="guest">
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </div>
            </nav>
        </header>
    )
}

export default Header;