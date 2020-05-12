import React from 'react';
import { addPostActionCreator, updatePostTypingActionCreator, updateTitleTypingActionCreator } from '../../redux/blogPageReducer'
import Blog from '../Blog/Blog';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
    return {
        blogPageData: state.blogPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updatePostTypingFunc: (text) => dispatch(updatePostTypingActionCreator(text)),
        updateTitleTypingFunc: (title) => dispatch(updateTitleTypingActionCreator(title)),
        addPostFunc: () => dispatch(addPostActionCreator())
    }
}

const BlogContainer = connect(mapStateToProps, mapDispatchToProps)(Blog);


export default BlogContainer;