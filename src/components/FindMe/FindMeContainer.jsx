import React from 'react';
import FindMe from '../FindMe/FindMe';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
    return {
        findMeBlockData: state.findMeBlock
    }
}

let mapDispatchToProps = (dispatch) => {
    return {}
}

const FindMeContainer = connect(mapStateToProps, mapDispatchToProps)(FindMe);


export default FindMeContainer;