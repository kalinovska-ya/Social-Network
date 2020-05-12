let initialState = {
    instaPhotosData: [
        {id: 1, src: '#', to: 'https://instagram.com/jue_pho/id1', alt: 'photo 1'}, //  later, check how to load images not directly in component, each photo should lead to the correct instalink
        {id: 2, src: '#', to: 'https://instagram.com/jue_pho/id2', alt: 'photo 2'},
        {id: 3, src: '#', to: 'https://instagram.com/jue_pho/id3', alt: 'photo 3'},
        {id: 4, src: '#', to: 'https://instagram.com/jue_pho/id4', alt: 'photo 4'},
        {id: 5, src: '#', to: 'https://instagram.com/jue_pho/id5', alt: 'photo 5'},
        {id: 6, src: '#', to: 'https://instagram.com/jue_pho/id6', alt: 'photo 6'}
    ]
}

const findMeBlockReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            break;
    }

    return state;
}


export default findMeBlockReducer;