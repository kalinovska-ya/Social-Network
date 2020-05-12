import React from 'react';
import { addLikeActionCreator, deletePostActionCreator } from '../../../redux/blogPageReducer';
import Article from '../Article/Article';
import { connect } from 'react-redux';


let mapStateToProps = (state, ownProps) => {
    return {
        articleData: state.blogPage.articleData,
        title: ownProps.title,
        id: ownProps.id,
        date: ownProps.date,
        image: ownProps.image,
        post: ownProps.post,
        likes: ownProps.likes,
        key: ownProps.id
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addLikeFunc: (num, id) => dispatch(addLikeActionCreator(num, id)),
        deletePostFunc: (id) => dispatch(deletePostActionCreator(id))
    }
}

const ArticleContainer = connect(mapStateToProps, mapDispatchToProps)(Article)


export default ArticleContainer;