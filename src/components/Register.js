import { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
//компонент для регистрации пользователя
function Register({ onRegister }) {
  const [registerData, setRegisterData] = useState({ email: '', password: '' });
  //метод для изменения объекта с данными пользователя
  function handleChange(e) {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  }
  //метод сабмита, производящий регистрацию пользователя
  const handleSubmit = (e) => {
    e.preventDefault();
    const { ...data } = registerData;

    onRegister(data);
  };

  return (
    <form className="popup__form popup__form_login" name={`popup__form_register`} onSubmit={handleSubmit}>
      <h2 className={`popup__title popup__title_login`}>Регистрация</h2>
      <input
        id="email"
        className="popup__input popup__input_is_email popup__input_color_black"
        name="email"
        type="text"
        placeholder="Email"
        required
        value={registerData.email}
        onChange={handleChange}
      />
      <span id="user-email-error" className="popup__error"></span>
      <input
        id="password"
        className="popup__input popup__input_is_password popup__input_color_black"
        name="password"
        type="password"
        placeholder="Пароль"
        required
        value={registerData.password}
        onChange={handleChange}
      />
      <span id="user-password-error" className="popup__error"></span>
      <input type="submit" className="popup__submit popup__submit_login" value="Зарегистрироваться" />
      <p className="register__subtitle">
        Уже зарегистрированы?{' '}
        <Link to="sign-in" className="register__subtitle register__subtitle_link">
          Войти
        </Link>
      </p>
    </form>
  );
}

export default withRouter(Register);
