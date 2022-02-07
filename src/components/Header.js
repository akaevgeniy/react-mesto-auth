import { Link } from 'react-router-dom';
import logo from '../images/header-logo.svg';
//шапка сайта, отличается для авторизированного и не авторизированного пользователя
function Header({ loggedIn, userInfo, onLogout, menuActive, setMenuActive }) {
  return (
    <header className="header">
      <div className={menuActive ? 'header__userblock' : 'header__userblock_hidden'}>
        <div className="header__user">
          <p className="header__text header__text_user">{userInfo.email}</p>
          <p
            onClick={() => {
              onLogout();
              setMenuActive(!menuActive);
            }}
            className="header__text header__text_link header__text_opacity"
          >
            Выйти
          </p>
        </div>
      </div>
      <div className="header__navbar">
        <img src={logo} alt="Логотип Место" className="logo" />

        {loggedIn ? (
          <>
            <div className="header__logout">
              <p className="header__text">{userInfo.email}</p>
              <p onClick={() => onLogout()} className="header__text header__text_link header__text_opacity">
                Выйти
              </p>
            </div>
            <div className="header__menu">
              <button className={menuActive ? 'header__button header__button_active' : 'header__button'} onClick={() => setMenuActive(!menuActive)}>
                <span className={menuActive ? 'header__menuspan header__menuspan_active' : 'header__menuspan'}></span>
              </button>
            </div>
          </>
        ) : (
          <div className="header__transitions">
            <Link to={window.location.pathname === '/sign-in' ? 'sign-up' : 'sign-in'} className="header__text header__text_opacity">
              {window.location.pathname === '/sign-in' ? 'Регистрация' : 'Войти'}
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
