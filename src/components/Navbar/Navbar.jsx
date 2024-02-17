import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="menu background">
            <ul className="menu__list">
                <li className="menu__item">
                    <NavLink className="menu__link" to="/profile/2">Profile</NavLink>
                </li>
                <li className="menu__item">
                    <NavLink className="menu__link" to="/users">Users</NavLink>
                </li>
                <li className="menu__item">
                    <NavLink className="menu__link" to="/dialogs">Messages</NavLink>
                </li>
                <li className="menu__item">
                    <a className="menu__link" href="#">News</a>
                </li>
                <li className="menu__item">
                    <a className="menu__link" href="#">Music</a>
                </li>
                <li className="menu__item">
                    <a className="menu__link" href="#">Settings</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;