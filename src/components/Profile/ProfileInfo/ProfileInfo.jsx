import React from 'react';
import Preloader from '../../Common/Preloader/Preloader';
import theme from './../../../assets/images/theme.jpg';
// import user from './../../../assets/images/user.jpg';
import './ProfileInfo.css';

const ProfileInfo = (props) => {

    if(!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <img className="profile__img" src={theme} alt="тема" width="900" height="310" />
            <div className="user background">
                <img className="user__img" src={props.profile.photos.large} alt="" />
                <div className="user__info">
                    <span className="user__name">Anjelika Borisova</span>
                    <ul className="user__list">
                        <li className="user__item">Date of Birth: 19 June</li>
                        <li className="user__item">City: Penza</li>
                        <li className="user__item">Hobby: create websites, music, pole sport</li>
                        <li className="user__item">Website: htpps://super-woman.com</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;