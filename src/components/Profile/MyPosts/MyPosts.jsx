import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/state';
import './MyPosts.css';
import Post from './Post/Post';

const MyPosts = (props) => {


    let postsElements = props.posts.map(post => <Post message={post.post} like={post.like}/>);

    let newPostElement = React.createRef()  ;


    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }

    return (
        <div>
            <div className="new-post">
                <span className="new-post__title">My post</span>
                <textarea className="area" placeholder="your news..." ref={newPostElement} onChange={onPostChange} value={props.newPostText}></textarea>
                <button className="btn" onClick={addPost}>Add post</button>
            </div>
            { postsElements }
        </div>
    )
}

export default MyPosts;