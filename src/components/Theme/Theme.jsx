import React from 'react';
import './Theme.css';
import NotReady from '../NotReady/NotReady';


const Theme = (props) => {
    return (
        <main className="settings-content">
        Theme settings
            <NotReady />
        </main>
    );
}


export default Theme;