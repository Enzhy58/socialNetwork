import React from 'react';
import './Users.css';

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            { id: 1, photoUrl: 'https://i.pinimg.com/originals/59/f6/d1/59f6d192b9db45b87c09ebdfb184b44d.png', followed: true, fullName: 'Dmitry', status: 'I am looking for a Job right now...', location: { city: 'Minsk', country: 'Belarus' } },
            { id: 2, photoUrl: 'https://sun9-21.userapi.com/impf/c631229/v631229299/3bc11/A8aMnPzdtiE.jpg?size=800x776&quality=96&sign=d82fbe65ec309e98fc4aa15587dde201&c_uniq_tag=Fo65Ekl0t60bxUiJTxIlJFOuy58vMnIOSh_R7eE51No&type=album', followed: true, fullName: 'Svetlana', status: 'I am so pretty', location: { city: 'Moscow', country: 'Russia' } },
            { id: 3, photoUrl: 'https://www.ansaroo.com/images/5e/5e78dcf7f83f8994ba19e1448add1afb.jpeg', followed: false, fullName: 'Sergei', status: 'I like a football!!!', location: { city: 'Kiev', country: 'Ukrane' } },
            { id: 4, photoUrl: 'https://66.media.tumblr.com/8676feb22c8037728ca627d06f83a091/tumblr_orilg1U0E31s3zxg3o1_500.jpg', followed: false, fullName: 'Andrew', status: 'I am free to help you to create good Video Production', location: { city: 'USA', country: 'Philadelphia' } }
        ]

        )
    }

    return <div>

        <ul className="users__list">
            {
                props.users.map(u => <li className="users__item background" key={u.id} >

                    <div>

                        <img className="users__img" src={u.photoUrl} alt="" />

                        <div>
                            {u.followed
                                ? <button className="btn users__btn" onClick={() => { props.unfollow(u.id) }} >Unfollow</button>
                                : <button className="btn users__btn" onClick={() => { props.follow(u.id) }}>Follow</button>}

                        </div>
                    </div>

                    <div className="users__wrapper">
                        <div className="users__info">
                            <div className="users__name">{u.fullName}</div>
                            <div className="users__status">{u.status}</div>
                        </div>
                        <div className="users__location">
                            <div>{u.location.country},</div>
                            <div>{u.location.city}</div>
                        </div>
                    </div>
                </li>)
            }
        </ul>
        <button className="btn users__more">Show more</button>
    </div>
}

export default Users;