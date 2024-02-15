import React from 'react';
import './Users.css';
import axios from 'axios';
import userPhoto from '../../assets/images/userPhoto.jpg';

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
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
            <ul className="pagination">
                {pages.map(p => {
                    return <li className={this.props.currentPage === p && StyleSheet.selectedPage} onClick={ () => {this.props.setCurrentPage(p)} }>{p}</li>
                })}
            </ul>

            <ul className="users__list">
                {
                    this.props.users.map(u => <li className="users__item background" key={u.id} >

                        <div>

                            <img className="users__img" src={u.photos.small != null ? u.photos.small : userPhoto} alt="" />

                            <div>
                                {u.followed
                                    ? <button className="btn users__btn" onClick={() => { this.props.unfollow(u.id) }} >Unfollow</button>
                                    : <button className="btn users__btn" onClick={() => { this.props.follow(u.id) }}>Follow</button>}

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
            <button className="btn users__more">Show more</button>
        </div>
    }

}

export default Users;