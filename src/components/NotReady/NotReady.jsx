import React from 'react';
import './NotReady.css';
import img from './../../images/ooops.jpg';


const NotReady = (props) => {
    return (
        <figure className="under-dev">
            <img src={img} alt="Sorry" />
            <figcaption>This page is still under development...</figcaption>  
        </figure>
    );
}


export default NotReady;