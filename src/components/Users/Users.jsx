import './Users.css';
import userPhoto from '../../assets/images/userPhoto.jpg';
import { NavLink } from 'react-router-dom';

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>

        <ul className="users">
            {
                props.users.map(u => <li className="users__item background" key={u.id} >

                    <div>

                        <NavLink to={'/profile/' + u.id} > <img className="users__img" src={u.photos.small != null ? u.photos.small : userPhoto} alt="" /> </NavLink>

                        <div>
                            {u.followed
                                ? <button className="users__btn btn" disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.unfollow(u.id);



                                }} >Unfollow</button>


                                : <button className="users__btn btn" disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.follow(u.id);



                                }}>Follow</button>}

                        </div>
                    </div>

                    <div className="users__wrapper">
                        <div className="users__info">
                            <div className="users__name">{u.name}</div>
                            <div className="users__status">{u.status}</div>
                        </div>
                        <div className="users__location">
                            <div>{"u.location.country"},</div>
                            <div>{"u.location.city"}</div>
                        </div>
                    </div>
                </li>)
            }
        </ul>

        <button className="users__more btn">Show more</button>

        <ul className="pagination">
            {pages.map(p => {
                return <li className="pagination__item" onClick={(e) => { props.onPageChanged(p) }}>{p}</li>
            })}
        </ul>

    </div >
}

export default Users;