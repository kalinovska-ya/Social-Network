import React from 'react';
import './FindMe.css';
import InstaPhoto from './InstaPhoto/InstaPhoto';


const FindMe = (props) => {
    let instaPhotoElementsMassive = props.findMeBlockData.instaPhotosData.map( instaPhotoEl =>  <InstaPhoto to={instaPhotoEl.to} 
                                                                                                            id={instaPhotoEl.id} 
                                                                                                            src={instaPhotoEl.src} 
                                                                                                            alt={instaPhotoEl.alt}
                                                                                                            key={instaPhotoEl.id}  /> );

    return (
        <div className="bottom-banner">
            <h4 className="bottom-banner__heading">Find me on instagram</h4>
            <div className="insta">
                <div className="insta-icon"></div>
                <div className="insta-name">
                    <a className="insta-name__link" href="https://instagram.com/jue_pho" target="_blank">JUE_PHO</a>
                </div>
            </div>
            <div className="bottom-banner__gallery">
                {instaPhotoElementsMassive}
            </div>
        </div>
    );
}


export default FindMe;