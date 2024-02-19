import { NavLink } from 'react-router-dom';
import logo from './../../assets/images/logo.svg';
import './Header.css';

const Header = (props) => {
    return (
        <header className="header">

            <div className="container">
                <div className="header__inner">
                    <a className="logo" href="#">
                        <img className="logo__img" src={logo} width="197" height="56" alt="logo" />
                    </a>
                    <div className="login">

                        {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}

                    </div>
                </div>
            </div>


        </header>
    )
}

export default Header;