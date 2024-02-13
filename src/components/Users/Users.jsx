import React from 'react';
import './Users.css';

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            { id: 1, photoUrl: 'https://pitaniemalysha.ru/wp-content/uploads/2020/04/s1200-2-1.jpeg', followed: true, fullName: 'Dmitry', status: 'I am looking for a Job right now...', location: { city: 'Minsk', country: 'Belarus' } },
            { id: 2, photoUrl: 'https://pitaniemalysha.ru/wp-content/uploads/2020/04/s1200-2-1.jpeg', followed: true, fullName: 'Svetlana', status: 'I am so pretty', location: { city: 'Moscow', country: 'Russia' } },
            { id: 3, photoUrl: 'https://pitaniemalysha.ru/wp-content/uploads/2020/04/s1200-2-1.jpeg', followed: false, fullName: 'Sergei', status: 'I like a football!!!', location: { city: 'Kiev', country: 'Ukrane' } },
            { id: 4, photoUrl: 'https://pitaniemalysha.ru/wp-content/uploads/2020/04/s1200-2-1.jpeg', followed: false, fullName: 'Andrew', status: 'I am free to help you to create good Video Production', location: { city: 'USA', country: 'Philadelphia' } }
        ]

        )
    }

    return <div>
        {
            props.users.map(u => <div key={u.id} >

                <span>
                    <div>
                        <img src={u.photoUrl} />
                    </div>
                    <div>
                        {u.followed
                            ? <button className="btn" onClick={() => { props.unfollow(u.id) }} >Unfollow</button>
                            : <button className="btn" onClick={() => { props.follow(u.id) }}>Follow</button>}

                    </div>
                </span>

                <span>
                    <span>
                        <div>{u.fullName}</div><div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div><div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;