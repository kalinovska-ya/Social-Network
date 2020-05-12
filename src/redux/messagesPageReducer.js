const SEND_MESSAGE = 'SEND-MESSAGE',
      UPDATE_MESSAGE_TYPING = 'UPDATE-MESSAGE-TYPING';

let initialState = {
    dialogData: [
        {id: 1, user: 'Helena'},
        {id: 2, user: 'Daniel'},
        {id: 3, user: 'Karim'},
        {id: 4, user: 'Picky'},
        {id: 5, user: 'Verginnia'},
        {id: 6, user: 'Sarah'},
        {id: 7, user: 'Jo'},
        {id: 8, user: 'Billy'}
    ],
    chatMessageData: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How are You?'},
        {id: 3, message: 'Yoyoyoyo!!!'},
        {id: 4, message: 'Yoyoyoyo!!!'},
        {id: 5, message: 'Yoyoyoyo!!!'}
    ],
    newMessageTyping: ''
}

const messagesPageReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let newMessageElement = {
                id: 6,
                message: state.newMessageTyping
            }

            return {
                ...state, 
                chatMessageData: [...state.chatMessageData, newMessageElement],
                newMessageTyping: '',
            };

        case UPDATE_MESSAGE_TYPING:
            return {
                ...state, 
                newMessageTyping: action.newText
            };

        default:
            return state;
    }
}

export const sendMessageActionCreator = () => ( {type: SEND_MESSAGE} );
export const updateMessageTypingActionCreator = (text) => ( {type: UPDATE_MESSAGE_TYPING, newText: text} );


export default messagesPageReducer;