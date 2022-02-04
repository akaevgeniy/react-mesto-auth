import { Link } from 'react-router-dom';
import logo from '../images/header-logo.svg';
function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Логотип Место" className="logo" />
      <Link to="sign-up" className="navbar__link">
        <p className="header__text">Регистрация</p>
      </Link>
    </header>
  );
}

export default Header;
