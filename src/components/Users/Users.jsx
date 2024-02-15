import React from 'react';
import styles from './Users.module.css';
import axios from 'axios';
import userPhoto from '../../assets/images/userPhoto.jpg';

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    };

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        });
    }


    render() {

        let pagesCount = Math.ceil (this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for(let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return <div>
            <ul className={styles.pagination}>
                {pages.map(p => {
                    return <li className={this.props.currentPage === p && styles.selected } onClick={ (e) => {this.onPageChanged(p)} }>{p}</li>
                })}
            </ul>

            <ul className={styles.list}>
                {
                    this.props.users.map(u => <li className={styles.item} key={u.id} >

                        <div>

                            <img className={styles.img} src={u.photos.small != null ? u.photos.small : userPhoto} alt="" />

                            <div>
                                {u.followed
                                    ? <button className={styles.btn} onClick={() => { this.props.unfollow(u.id) }} >Unfollow</button>
                                    : <button className={styles.btn} onClick={() => { this.props.follow(u.id) }}>Follow</button>}

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
        </div>
    }

}

export default Users;