// old file, should be removed in the end 

import profilePageReducer from "./profilePageReducer";
import messagesPageReducer from "./messagesPageReducer";
import blogPageReducer from "./blogPageReducer";

let store = {
    _state: {

        profilePage: {
            name: 'Jue Hern',
            age: 24,
            country: 'Germany',
            city: 'Nurnberg',
            profession: 'Travel ang lifestyle blogger',
            aboutMe: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ut soluta deserunt. Nulla debitis consequuntur fugiat iure, quis ipsam nobis veniam ipsa deserunt, dolorum asperiores rem in officiis, qui dolor modi optio molestiae inventore molestias unde a. Unde, nam delectus? Ducimus vel aliquid explicabo sint sequi exercitationem laborum culpa tenetur. 
            
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque quisquam illum repudiandae vero possimus. Recusandae voluptates reprehenderit impedit sunt assumenda nisi provident rem rerum corrupti!`,
            photo: './../../images/avatar.png',
            insta: 'http:instagram.com/#',
            fb: 'http:facebook.com/#', 
            pinterest: '#',
            twitter: '#'
        },

        messagesPage: {
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
        },
    
        blogPage: {
            articleData: [
                {id: 1, title: 'Post number 1', date: '12 mar 2020', image: './static/media/post1.jpg', post: 'Hi, my first post', likes: 15},
                {id: 2, title: 'Post number 2', date: '10 mar 2020', image: '../images/post2', post: 'Second post youp youp!', likes: 35},
                {id: 3, title: 'Post number 3', date: '2 mar 2020', image: '', post: 'Something blablalblalbla', likes: 0},
                {id: 4, title: 'Post number 4', date: '20 feb 2020', image: '', post: 'Ola-la-la', likes: 18},
                {id: 5, title: 'Post number 5', date: '20 feb 2020', image: '', post: 'Pospnfvndzvnkfnkngjkfsndn flgnfskjngj', likes: 105},
                {id: 6, title: 'Post number 6', date: '17 jan 2020', image: '', post: 'kv m kmbv gflsjlkdmvlb kfsmngk', likes: 4},
            ],
            newPostTyping: '',
            newTitleTyping: ''
        },

        findMeBlock: {
            instaPhotosData: [
                {id: 1, src: '#', to: 'https://instagram.com/jue_pho/id1', alt: 'photo 1'},
                {id: 2, src: '#', to: 'https://instagram.com/jue_pho/id2', alt: 'photo 2'},
                {id: 3, src: '#', to: 'https://instagram.com/jue_pho/id3', alt: 'photo 3'},
                {id: 4, src: '#', to: 'https://instagram.com/jue_pho/id4', alt: 'photo 4'},
                {id: 5, src: '#', to: 'https://instagram.com/jue_pho/id5', alt: 'photo 5'},
                {id: 6, src: '#', to: 'https://instagram.com/jue_pho/id6', alt: 'photo 6'}
            ]
        }
    },

    _callSubscribeFunc() {
        
    },

    getState() {
        return this._state;
    },

    dispatch(action) {

        profilePageReducer(this._state.profilePage, action);
        messagesPageReducer(this._state.messagesPage, action);
        blogPageReducer(this._state.blogPage, action);

        this._callSubscribeFunc(this._state); 
    },

    subscribe(observer) {
        this._callSubscribeFunc = observer;
    }
}


export default store;