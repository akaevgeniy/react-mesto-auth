import { Link } from 'react-router-dom';
import logo from '../images/header-logo.svg';
function Header({ loggedIn, userInfo, onLogout }) {
  return (
    <header className="header">
      <img src={logo} alt="Логотип Место" className="logo" />

      {loggedIn ? (
        <div className="header__logout">
          <p className="header__text">{userInfo.email}</p>
          <Link onClick={() => onLogout()} className="header__text header__text_link header__text_opacity">
            Выйти
          </Link>
        </div>
      ) : (
        <Link to={window.location.pathname === '/sign-in' ? 'sign-up' : 'sign-in'} className="header__text header__text_opacity">
          {window.location.pathname === '/sign-in' ? 'Регистрация' : 'Войти'}
        </Link>
      )}
    </header>
  );
}

export default Header;
