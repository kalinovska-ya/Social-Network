let initialState = {
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
}

const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            break;
    }

    return state;
}


export default profilePageReducer;

