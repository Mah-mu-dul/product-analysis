import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div>
                <h1>welcome to my fancy routing </h1>
            <nav>
                <Link className="nav-items"to="/">Home</Link>
                <Link className="nav-items"to="/Review">Reviews</Link>
                <Link className="nav-items"to="/Dashboard">Dashboard</Link>
                <Link className="nav-items"to="/Blogs">Blogs</Link>
                <Link className="nav-items"to="/About">About</Link>
            </nav>
        </div>
    );
};

export default Header;