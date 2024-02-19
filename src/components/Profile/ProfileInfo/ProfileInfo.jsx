import React from 'react';
import Preloader from '../../Common/Preloader/Preloader';
import theme from './../../../assets/images/theme.jpg';

const ProfileInfo = (props) => {

    if(!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <img className="profile__img" src={theme} width="900" height="310" alt="тема" />
            <div className="user background">
                <img className="user__img" src={props.profile.photos.large} width="200" height="200" alt="" />
                <div className="user__info">
                    <span className="user__name">{props.profile.fullName}</span>
                    <ul className="user__list">
                        <li className="user__item">{props.profile.aboutMe}</li>
                        <li className="user__item">{props.profile.lookingForAJobDescription}</li>
                        <li className="user__item">Hobby: create websites, music, pole sport</li>
                        <li className="user__item">Website: htpps://super-woman.com</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;