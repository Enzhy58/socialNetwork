import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { useParams } from 'react-router-dom';
import { getUserProfile, getStatus, updateStatus } from "../../redux/profile-reducer";
import './Profile.css';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

function ProfileContainer(props) {
    let { userId } = useParams();

    if (!userId) {
        userId = 2;
    }

    useEffect(() => {
        props.getUserProfile(userId)
    }, [props, userId]);

    props.getStatus(userId);

    

    return (
        <div>
            <Profile profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
        </div>
    );

}

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

export default compose(
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
    withAuthRedirect
)(ProfileContainer);