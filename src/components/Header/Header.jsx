import logo from './../../assets/images/logo.svg';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <a className="logo" href="#">
                    <img className="logo__img" src={logo} alt="логотип" />
                </a>
            </div>
        </header>
    )
}

export default Header;