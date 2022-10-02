import React from 'react';
import {Link} from 'react-router-dom';
import Logo from "./Logo";
import '../css/Navbar.css';

function Navbar() {
    return (
        <nav className = "navbar">
            <ul className = 'navlist'>
            <li className = "navbar--items"> <Logo /> </li>
            <li><Link className = 'navbar--items' to='/'>Home</Link></li>
            <li><Link className = 'navbar--items' to='/login'>Login</Link></li>
            <li><Link className = 'navbar--items' to='/mybooks'>MyBooks</Link></li>
            <li><Link className = 'navbar--items' to='/review'>Write Review</Link></li>
            <li><Link className = 'navbar--items' to='/reviews'>Reviews</Link></li>
            <li><Link className = 'navbar--items' to='/favourites'>Favourites</Link></li>
            <li><Link className = 'navbar--items' to='/wishlist'>Wish List</Link></li>
            <li><Link className = 'navbar--items logout' to='/logout'>Log Out</Link></li>
            </ul>
            
        </nav>
    )
}

export default Navbar
