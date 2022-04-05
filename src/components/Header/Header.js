import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div>
            <nav>
                <Link className="nav-items"to="/">HOME</Link>
                <Link className="nav-items"to="/Review">REVIEW</Link>
                <Link className="nav-items"to="/Dashboard">DASHBOARD</Link>
                <Link className="nav-items"to="/Blogs">BLOGS</Link>
                <Link className="nav-items"to="/About">ABOUT</Link>
                

            </nav>
        </div>
    );
};

export default Header;