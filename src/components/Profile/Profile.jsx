import React from 'react';
import './Profile.css';
import img from './../../images/avatar.png';


const Profile = (props) => {
    return (
        <main className="profile-content">
            <div className="profile-info">
                <div className="name">
                    <h1 className="name__text">Hi, I'm <span>{props.profilePageData.name}</span></h1>
                </div>
                <div className="profile-details">
                    <ul className="profile-details-list">
                        <li className="profile-details-list__item">{props.profilePageData.age} years</li>
                        <li className="profile-details-list__item">{props.profilePageData.country}, {props.profilePageData.city}</li>
                        <li className="profile-details-list__item">{props.profilePageData.profession}</li>
                    </ul>
                </div>
                <div className="about">
                    <p className="about__text"> {props.profilePageData.aboutMe}</p>
                </div> 

                <button className="button">Update</button>
            </div>

            <div className="gradient">
                <div className="avatar">
                    <img className="avatar__photo" src={img} alt="avatar"/>
                </div>
            </div>
        </main>
    );
}


export default Profile;