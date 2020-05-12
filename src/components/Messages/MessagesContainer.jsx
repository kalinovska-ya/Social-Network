import React from 'react';
import Messages from '../Messages/Messages';
import { sendMessageActionCreator, updateMessageTypingActionCreator } from '../../redux/messagesPageReducer';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
    return {
        messagesPageData: state.messagesPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateMessageTypingFunc: (text) => dispatch(updateMessageTypingActionCreator(text)),
        sendMessageFunc: () => dispatch(sendMessageActionCreator())
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps) (Messages);


export default MessagesContainer;