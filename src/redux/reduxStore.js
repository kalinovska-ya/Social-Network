import { createStore, combineReducers } from "redux";
import messagesPageReducer from "./messagesPageReducer";
import blogPageReducer from "./blogPageReducer";
import profilePageReducer from "./profilePageReducer";
import findMeBlockReducer from "./findMeBlockReducer";


let reducers = combineReducers( {
    profilePage: profilePageReducer,
    messagesPage: messagesPageReducer,
    blogPage: blogPageReducer,
    findMeBlock: findMeBlockReducer
} );

let store = createStore(reducers);


export default store;