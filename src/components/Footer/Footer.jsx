import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom';
import { animateScroll as scroll } from "react-scroll";


const Footer = (props) => {

    let scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <footer className="footer">
            <div className="footer-menu">
                <NavLink className="footer-menu__link" to="/myblog" onClick={scrollToTop}>Blog</NavLink> / 
                <NavLink className="footer-menu__link" to="/chat" onClick={scrollToTop}>Chat</NavLink> / 
                <NavLink className="footer-menu__link" to="/gallery" onClick={scrollToTop}>Gallery</NavLink>
            </div>

            <div className="footer-copyright">
                <span> 2019 - Personal Social. All Rights Reserved.</span>
            </div>
        </footer>
    );
}


export default Footer;