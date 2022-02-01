import logo from '../images/header-logo.svg';
function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Логотип Место" className="logo" />
      <p className="header__text">Регистрация</p>
    </header>
  );
}

export default Header;
