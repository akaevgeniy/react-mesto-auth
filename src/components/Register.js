import React from 'react';
import { Link, withRouter } from 'react-router-dom';
function Register() {
  return (
    <form className="popup__form popup__form_login" name={`popup__form_register`}>
      <h2 className={`popup__title popup__title_login`}>Регистрация</h2>
      <input
        id="user-email"
        className="popup__input popup__input_is_email popup__input_color_black"
        name="popup__input_is_email"
        type="text"
        placeholder="Email"
        required
      />
      <span id="user-email-error" className="popup__error"></span>
      <input
        id="user-password"
        className="popup__input popup__input_is_password popup__input_color_black"
        name="popup__input_is_password"
        type="text"
        placeholder="Пароль"
        required
      />
      <span id="user-password-error" className="popup__error"></span>
      <input type="submit" className="popup__submit popup__submit_login" value="Зарегистрироваться" />
      <p className="register__subtitle">Уже зарегистрированы? Войти</p>
    </form>
  );
}

export default withRouter(Register);
