import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { Navigate, useParams } from 'react-router-dom';
import { getUserProfile } from "../../redux/profile-reducer";
import './Profile.css';

function ProfileContainer(props) {
    let { userId } = useParams();

    if (!userId) {
        userId = 2;
    }

    useEffect(() => {
        props.getUserProfile(userId)
    }, [props, userId]);

    if(!props.isAuth) return <Navigate to="/login" />;

    return (
        <div>
            <Profile profile={props.profile} />
        </div>
    );

}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { getUserProfile })(ProfileContainer);