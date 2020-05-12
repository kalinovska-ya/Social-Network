import React from 'react';
import './InstaPhoto.css';
import img1 from './../../../images/post1.jpg';
import img2 from './../../../images/post2.jpg';
import img3 from './../../../images/post3.jpg';
import img4 from './../../../images/post4.jpg';
import img5 from './../../../images/post1.jpg';
import img6 from './../../../images/post2.jpg';


const InstaPhoto = (props) => {

    let images = [img1, img2, img3, img4, img5, img6];  // temporary resolved - should be added via store

    return (
        <div className="bottom-banner__img-container">
            <a className="bottom-banner__link" href={props.to} target="_blank">
                <img className="bottom-banner__image" id={props.id} src={images[props.id - 1]} alt={props.alt} />
            </a>
        </div>
    );
}


export default InstaPhoto;