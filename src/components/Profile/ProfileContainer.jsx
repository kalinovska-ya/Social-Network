import React from 'react';
import Profile from '../Profile/Profile';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
    return {
        profilePageData: state.profilePage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {}
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileContainer;