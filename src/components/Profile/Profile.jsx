import MyPostsContainer from './MyPosts/MyPostsContainer';
import './Profile.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

    return (
        <div className="content">
            <ProfileInfo />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;