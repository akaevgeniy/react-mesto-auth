import logo from '../images/header-logo.svg';
function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Логотип Место" className="logo" />
    </header>
  );
}

export default Header;
