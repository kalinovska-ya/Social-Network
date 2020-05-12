import React from 'react';
import './Messages.css';
import Dialog from './Dialog/Dialog';
import ChatMessage from './ChatMessage/ChatMessage';


const Messages = (props) => {

    let dialogElementsMassive = props.messagesPageData.dialogData.map( dialogEl =>  <Dialog user={dialogEl.user} id={dialogEl.id} key={dialogEl.id} /> );
    let chatMessageElementsMassive = props.messagesPageData.chatMessageData.map( chatMessageEl => <ChatMessage message={chatMessageEl.message} key={chatMessageEl.id} /> );

    let sendMessage = () => {
        props.sendMessageFunc();
    }

    let updateMessageTyping = (e) => {
        let text = e.target.value;
        props.updateMessageTypingFunc(text);
    }

    return (
        <main className="messages-content">
            <div className="dialog-names">
                {dialogElementsMassive}
            </div>
            <div className="chat">
                {chatMessageElementsMassive}
            </div>

            <div className="txt">
                <textarea onChange={ updateMessageTyping } value={props.messagesPageData.newMessageTyping} placeholder='type Your message here...'></textarea>
                <input className="button" type="button" onClick={ sendMessage } value="Send"/>
            </div>
        </main>
    );
}


export default Messages;