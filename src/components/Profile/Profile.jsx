import MyPosts from './MyPosts/MyPosts';
import './Profile.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

    return (
        <div className="content">
            <ProfileInfo />
            <MyPosts posts={props.profilePage.posts} addPost={props.addPost} newPostText={props.profilePage.newPostText} updateNewPostText={props.updateNewPostText}/>
        </div>
    )
}

export default Profile;