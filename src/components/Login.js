import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

function Login({ onLogin }) {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  //метод для изменения данных пользователя
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };
  //метод сабмита для произведения авторизации пользователя
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!loginData.email || !loginData.password) {
      return;
    }

    onLogin(loginData);
  };

  return (
    <form className="popup__form popup__form_login" name={`popup__form_login`} onSubmit={handleSubmit}>
      <h2 className={`popup__title popup__title_login`}>Вход</h2>
      <input
        id="email"
        className="popup__input popup__input_is_email popup__input_color_black"
        name="email"
        type="text"
        placeholder="Email"
        required
        value={loginData.email}
        onChange={handleChange}
      />
      <span id="email-error" className="popup__error"></span>
      <input
        id="password"
        className="popup__input popup__input_is_password popup__input_color_black"
        name="password"
        type="password"
        placeholder="Пароль"
        required
        value={loginData.password}
        onChange={handleChange}
      />
      <span id="password-error" className="popup__error"></span>
      <input type="submit" className="popup__submit popup__submit_login" value="Войти" />
    </form>
  );
}

export default withRouter(Login);
