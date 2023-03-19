import theme from './../../../images/theme.jpg';
import user from './../../../images/user.jpg';
import './ProfileInfo.css';

const ProfileInfo = () => {
    return (
        <div>
            <img className="profile__img" src={theme} alt="тема" width="900" height="310" />
            <div className="user">
                <img className="user__img" src={user} alt="" />
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