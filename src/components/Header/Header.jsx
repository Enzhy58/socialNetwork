import { NavLink } from 'react-router-dom';
import logo from './../../assets/images/logo.svg';
import './Header.css';

const Header = (props) => {
    return (
        <header className="header">

            <div className="container">
                <a className="logo" href="#">
                    <img className="logo__img" src={logo} alt="логотип" />
                </a>
                <div className="login">

                       { props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink> }
                    
                </div>
            </div>


        </header>
    )
}

export default Header;