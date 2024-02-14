import user from './../../../../assets/images/user.jpg';
import './Post.css';

const Post = (props) => {
    return (
        <div className="post background">
            <div className="post__wrapper">
                <img className="post__img" src={user} alt="" width="94" height="94" />
                <div className="post__text">
                    <p>
                        {props.message}
                    </p>
                </div>
            </div>
            <button className="post__like"> {props.like} like</button>
        </div>
    )
}

export default Post;