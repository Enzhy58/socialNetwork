import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { useParams } from 'react-router-dom';
import { getUserProfile } from "../../redux/profile-reducer";
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

    

    return (
        <div>
            <Profile profile={props.profile} />
        </div>
    );

}

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})

export default compose(
    connect(mapStateToProps, { getUserProfile }),
    withAuthRedirect
)(ProfileContainer);