import React from 'react';
import './Start.css';
import img from './../../images/camera.png';


const Start = (props) => {
    return (
        <main className="start-content">
            <p>Hello, Jue</p>
            <span>WELCOME TO YOUR SOCIAL ACCOUNT</span>
            <img src={img} alt="start-page-icon" />
        </main>
    );
}


export default Start;