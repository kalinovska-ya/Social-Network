import React from 'react';
import './Blog.css';
import ArticleContainer from './Article/ArticleContainer';
import Arrows from './Arrows/Arrows';
import img from './../../images/avatar.png';


const Blog = (props) => {
    
    let articleElementsMassive = props.blogPageData.articleData.map( articleEl =>  <ArticleContainer title={articleEl.title}
                                                                                                     id={articleEl.id} 
                                                                                                     date={articleEl.date} 
                                                                                                     image={articleEl.image} 
                                                                                                     post={articleEl.post} 
                                                                                                     likes={articleEl.likes}
                                                                                                     key={articleEl.id} /> );

    let newPostTyping = React.createRef();
    let newTitleTyping = React.createRef();

    let addPost = () => {
        props.addPostFunc();
    }

    let updatePostTyping = () => {
        let text = newPostTyping.current.value;
        props.updatePostTypingFunc(text);
    }

    let updateTitleTyping = () => {
        let title = newTitleTyping.current.value;
        props.updateTitleTypingFunc(title);
    }

    return (
        <main className="blog-content">
            <div className="gradient2">
                <div className="add-new">
                    <figure>
                        <img src={img} alt=""/>
                        <figcaption>Jue Hern</figcaption>
                    </figure>
                    <div className="add">
                        <form action="">
                            <textarea ref={newTitleTyping} onChange={updateTitleTyping} placeholder="TITLE" value={props.blogPageData.newTitleTyping} rows="1" cols="120"></textarea>
                            <textarea ref={newPostTyping} onChange={updatePostTyping} placeholder="text" value={props.blogPageData.newPostTyping} rows="4" cols="120"></textarea>
                            <input type="file" accept=".jpg, .png, .svg, .gif" />
                            <input className="button" type="reset" />
                            <input className="button" type="button" onClick={addPost} value="Add post" />
                        </form>
                    </div>
                </div>
            </div>

            <section>
                {articleElementsMassive}
            </section>

            <Arrows />

        </main>
    );
}


export default Blog;