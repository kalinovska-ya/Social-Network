import React from 'react';
import './Socials.css';


// currently not used

const Socials = () => {
    return (
        <div className="social">
            <div className="social-icon facebook"><a className="social-icon__link facebook__link" href="#"><i></i></a></div>
            <div className="social-icon twitter"><a className="social-icon__link twitter__link" href="#"><i></i></a></div>
            <div className="social-icon instagram"><a className="social-icon__link instagram__link" href="#"><i></i></a></div>
            <div className="social-icon pinterest"><a className="social-icon__link pinterest__link" href="#"><i></i></a></div>
        </div>
    );
}


export default Socials;