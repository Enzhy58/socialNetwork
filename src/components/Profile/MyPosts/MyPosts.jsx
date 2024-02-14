import React from 'react';
import './MyPosts.css';
import Post from './Post/Post';

const MyPosts = (props) => {


    let postsElements = props.posts.map(post => <Post message={post.post} like={post.like}/>);

    let newPostElement = React.createRef()  ;


    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div>
            <div className="new-post background">
                <span className="new-post__title">My post</span>
                <textarea className="area" placeholder="your news..." ref={newPostElement} onChange={onPostChange} value={props.newPostText}></textarea>
                <button className="btn" onClick={onAddPost}>Add post</button>
            </div>
            { postsElements }
        </div>
    )
}

export default MyPosts;