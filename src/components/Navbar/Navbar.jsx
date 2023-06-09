import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="menu">
            <ul className="menu__list">
                <li className="menu__item">
                    <NavLink className="menu__link" to="/profile">Profile</NavLink>
                </li>
                <li className="menu__item">
                    <a className="menu__link" href="#">Friends</a>
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