import React from 'react';
import './Dialog.css';
import { NavLink } from 'react-router-dom';


const Dialog = (props) => {
    return (
        <div className="dialog">
            <div className="dialog__avatar">
                <img className="dialog__avatar-image" src="" alt=""/>
            </div>
            <NavLink className="dialog__username" to={"/chat/" + props.id}>{props.user}</NavLink>
        </div>
    );
}


export default Dialog;