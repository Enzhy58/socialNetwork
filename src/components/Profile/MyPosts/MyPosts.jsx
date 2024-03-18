import React from 'react';
import './MyPosts.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validator';
import { Textarea } from '../../Common/Preloader/FormsControls/FormsControls';

const MyPosts = (props) => {


    let postsElements = props.posts.map(post => <Post message={post.post} like={post.like} />);


    let onAddPost = (values) => {
        props.addPost(values.newPostText)
    }

    return (
        <div>
            <div className="new-post background">
                <span className="new-post__title">My post</span>

                <AddPostFormRedux onSubmit={onAddPost}/>

            </div>
            {postsElements}
        </div>
    )
}

const AddPost = (props) => {
    return (
        <form action="#" onSubmit={props.handleSubmit}>
            <Field className="area" component={Textarea} name="newPostText" placeholder="your news..." validate={ [ required, maxLengthCreator(10) ] } />
            <button className="btn">Add post</button>
        </form>
    )
}

const AddPostFormRedux = reduxForm({form: "profileAddPostForm"}) (AddPost);

export default MyPosts;