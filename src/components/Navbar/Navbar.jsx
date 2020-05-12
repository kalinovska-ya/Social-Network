import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';


const Navbar = (props) => {
    return (
        <aside className="sidebar-content">
            <nav className="navbar">
                <ul className="navbar-list">
                    <li className="navbar-list__item">
                        <NavLink className="navbar-list__item-link" to="/profile">Profile</NavLink>
                    </li>
                    <li className="navbar-list__item">
                        <NavLink className="navbar-list__item-link" to="/chat">Messages</NavLink>
                    </li>
                    <li className="navbar-list__item">
                        <NavLink className="navbar-list__item-link" to="/myblog">Personal Blog</NavLink>
                    </li>
                    <li className="navbar-list__item">
                        <NavLink className="navbar-list__item-link" to="/gallery">Photo Collection</NavLink>
                    </li>
                    <li className="navbar-list__item">
                        <NavLink className="navbar-list__item-link" to="/newsfeed">Subscribe's content</NavLink>
                    </li>
                    <li className="navbar-list__item">
                        <NavLink className="navbar-list__item-link" to="/search">Search</NavLink>
                    </li>
                    <br/>
                    <li className="navbar-list__item">
                        <NavLink className="navbar-list__item-link" to="/settings">Theme Colour</NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}


export default Navbar;