import React from 'react';
import './Header.css';
import img from './../../images/logo.png';
import { NavLink } from 'react-router-dom';


const Header = (props) => {
    return (
        <header className="header">
            <div className="logo">
                <NavLink className="logo-link" to="/">
                    <img className="logo-link__image" src={img} alt="Logo - MINIMAL"/>          
                </NavLink>
                <h2 className="sub-heading__text">Photo blogging platform</h2>
            </div>

            <div className="socials"> {/* later: probably should be a component, if will be reused */}
                <div className="social-icon facebook"><a className="social-icon__link" target="_blank" href="https://facebook.com"></a></div>
                <div className="social-icon twitter"><a className="social-icon__link" target="_blank" href="https://twitter.com"></a></div>
                <div className="social-icon instagram"><a className="social-icon__link" target="_blank" href="https://instagram.com"></a></div>
                <div className="social-icon pinterest"><a className="social-icon__link" target="_blank" href="https://pinterest.com"></a></div>
            </div>
        </header>
    );
}


export default Header;