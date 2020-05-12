const ADD_POST = 'ADD-POST',
      UPDATE_POST_TYPING = 'UPDATE-POST-TYPING',
      ADD_LIKE = 'ADD-LIKE',
      DELETE_POST = 'DELETE-POST';

let initialState = {
    articleData: [
        {id: 1, title: 'Post number 1', date: '12 mar 2020', image: './static/media/post1.jpg', post: 'Hi, my first post', likes: 15}, // later, check how to load images not directly in component
        {id: 2, title: 'Post number 2', date: '10 mar 2020', image: '../images/post2', post: 'Second post youp youp!', likes: 35},
        {id: 3, title: 'Post number 3', date: '2 mar 2020', image: '', post: 'Something blablalblalbla', likes: 0},
        {id: 4, title: 'Post number 4', date: '20 feb 2020', image: '', post: 'Ola-la-la', likes: 18},
        {id: 5, title: 'Post number 5', date: '20 feb 2020', image: '', post: 'Pospnfvndzvnkfnkngjkfsndn flgnfskjngj', likes: 105},
        {id: 6, title: 'Post number 6', date: '17 jan 2020', image: '', post: 'kv m kmbv gflsjlkdmvlb kfsmngk', likes: 4},
    ],
    newPostTyping: '',
    newTitleTyping: ''
}

const blogPageReducer = (state = initialState, action) => {

    let stateCopy;

    switch (action.type) {
        case ADD_POST:
            let newPostElement = {
                id: 7,
                title: state.newTitleTyping,
                date: 'def',
                post: state.newPostTyping,
                likes: 0
            }

            return {
                ...state, 
                articleData: [...state.articleData, newPostElement],
                newPostTyping: '',
                newTitleTyping: ''
            };
        
        case UPDATE_POST_TYPING: {

            stateCopy = {...state};
            
            if (action.textarea === 'text') {
                stateCopy.newPostTyping = action.newText;
            } else if (action.textarea==='title') {
                stateCopy.newTitleTyping = action.newText;
            }
            return stateCopy;
        }

        case ADD_LIKE:

            stateCopy = {
                ...state,
                articleData: [...state.articleData]
            }

            for (let i = 0; i < stateCopy.articleData.length; i++) {
                let liked = true;
                if (stateCopy.articleData[i].id === action.id) {
                    if  (liked === true) {
                        stateCopy.articleData[i].likes = action.num + 1;
                        liked = false;
                    } else {
                        stateCopy.articleData[i].likes = action.num - 1;
                        liked = true;
                    }
                };
            }
            return stateCopy;

        case DELETE_POST:
            stateCopy = {
               ...state,
                articleData: [...state.articleData]
            }
    
            for (let i = 0; i < stateCopy.articleData.length; i++) {
                if (stateCopy.articleData[i].id === action.id) {
                    stateCopy.articleData.splice(i, 1);
                }
            };

            return stateCopy;

        default:
            return state;
    }


}

export const addPostActionCreator = () => ( {type: ADD_POST} );
export const updatePostTypingActionCreator = (text) => ( {type: UPDATE_POST_TYPING, newText: text, textarea: 'text'} );
export const updateTitleTypingActionCreator = (title) => ( {type: UPDATE_POST_TYPING, newText: title, textarea: 'title'} );
export const addLikeActionCreator = (num, id) => ( {type: ADD_LIKE, num: num, id: id} ); 
export const deletePostActionCreator = (id) => ( {type: DELETE_POST, id: id} );


export default blogPageReducer;