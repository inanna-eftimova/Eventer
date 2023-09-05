function Header() {
    return (
        <header>
            <a id="logo" href="/"
            ><img id="logo-img" src="./images/logo.png" alt=""/></a>

            <nav>
                <div>
                    <a href="#">Events</a>
                </div>

                <div className="user">
                    <a href="#">Add Event</a>
                    <a href="#">Logout</a>
                </div>


                <div className="guest">
                    <a href="#">Login</a>
                    <a href="#">Register</a>
                </div>
            </nav>
        </header>
    )
}

export default Header;