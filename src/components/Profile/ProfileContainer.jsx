import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { setUserProfile } from "../../redux/profile-reducer";
import './Profile.css';

function ProfileContainer(props) {
    let { userId } = useParams();

    if (!userId) {
        userId = 2;
    }

    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then((response) => {
            props.setUserProfile(response.data);
        });
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

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);






// import React from 'react';
// import Profile from './Profile';
// import { setUserProfile } from "../../redux/profile-reducer";
// import './Profile.css';
// import axios from 'axios';
// import { connect } from 'react-redux';

// class ProfileContainer extends React.Component {

//     componentDidMount() {
//         axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
//             this.props.setUserProfile(response.data);
//         });
//     };

//     render() {

//         return (
//             <Profile { ...this.props } profile={this.props.profile} />
//         )
//     }
// }

// let mapStateToProps = (state) => ({
//     profile: state.profilePage.profile
// })

// export default connect(mapStateToProps, { setUserProfile } )(ProfileContainer);