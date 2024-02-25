import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { useParams } from 'react-router-dom';
import { getUserProfile } from "../../redux/profile-reducer";
import './Profile.css';

function ProfileContainer(props) {
    let { userId } = useParams();

    if (!userId) {
        userId = 2;
    }

    useEffect(() => {
        props.getUserProfile(userId)
        // userAPI.getProfile(userId).then((response) => {
        //     props.setUserProfile(response.data);
        // });
    }, [props, userId]);

    return (
        <div>
            <Profile profile={props.profile} />
        </div>
    );

}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, { getUserProfile })(ProfileContainer);