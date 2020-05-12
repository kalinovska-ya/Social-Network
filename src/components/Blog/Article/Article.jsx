import React from 'react';
import './Article.css';


const Article = (props) => {

    let addLike = () => {
        let num = props.likes,
            id = props.id;

        props.addLikeFunc(num, id);
    }

    let deletePost = () => {
        let id = props.id;

        props.deletePostFunc(id);
    }

    return (
        <article>
            <h2>{props.title}</h2>
            <p>- {props.date} -</p>
            <div className="img">
                <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="img desc"/>
            </div>
            <p className="artText">{props.post}</p>
            <div className="buttonss">
                <div>
                    <button onClick={addLike}>&hearts; and &#9825;</button>
                    <span> {props.likes}</span>
                </div>
                <button onClick={deletePost}>Delete	&#9746;</button>
            </div>
            <div className="line"></div>
      </article>
    );
}


export default Article;