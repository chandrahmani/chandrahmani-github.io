const Navbar = () => {
    return (
        <div className="navbar">
            
            <div className="resp-menu-wrapper">
                <button className="btn">
                    <div className="menu-show"></div>
                    <div className="menu-show"></div>
                    <div className="menu-show"></div>
                </button>
            </div>
            <nav className="nav-bar">
                <ul className="">
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="#">SERVISES</a></li>
                    <li><a href="#">PAGES</a></li>
                    <li><a href="#">BLOG</a></li>
                    <li><a href="#">CONTACT</a></li>
                </ul>
            </nav>

        </div>
    )
}

export default Navbar;