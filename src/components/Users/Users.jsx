import styles from './Users.module.css';
import userPhoto from '../../assets/images/userPhoto.jpg';
import { NavLink } from 'react-router-dom';
import { userAPI } from '../../api/api';

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <ul className={styles.pagination}>
            {pages.map(p => {
                return <li className={props.currentPage === p && styles.selected} onClick={(e) => { props.onPageChanged(p) }}>{p}</li>
            })}
        </ul>

        <ul className={styles.list}>
            {
                props.users.map(u => <li className={styles.item} key={u.id} >

                    <div>

                        <NavLink to={'/profile/' + u.id} > <img className={styles.img} src={u.photos.small != null ? u.photos.small : userPhoto} alt="" /> </NavLink>

                        <div>
                            {u.followed
                                ? <button className={styles.btn} onClick={() => {

                                    userAPI.unfollow(u.id)
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.unfollow(u.id)
                                            }
                                        });



                                }} >Unfollow</button>


                                : <button className={styles.btn} onClick={() => {

                                    userAPI.follow(u.id)
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.follow(u.id)
                                            }
                                        });


                                }}>Follow</button>}

                        </div>
                    </div>

                    <div className={styles.wrapper}>
                        <div className={styles.info}>
                            <div className={styles.name}>{u.name}</div>
                            <div className={styles.status}>{u.status}</div>
                        </div>
                        <div className={styles.location}>
                            <div>{"u.location.country"},</div>
                            <div>{"u.location.city"}</div>
                        </div>
                    </div>
                </li>)
            }
        </ul>
        <button className={styles.btn}>Show more</button>
    </div >
}

export default Users;