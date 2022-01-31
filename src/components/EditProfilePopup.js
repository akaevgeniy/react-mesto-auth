import React from 'react';
import PopupWithForm from './PopupWithForm';
import CurrentUserContext from '../contexts/CurrentUserContext';

function EditProfilePopup(props) {
  //подписываемся на контекст, создаем стейты для имени и инфо о пользователе
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  //функция, меняющая поле с именем при изменении значения в инпуте
  function handleNameChange(e) {
    setName(e.target.value);
  }
  //функция, меняющая поле с информациоей пользователя при изменении значения в инпуте
  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }
  //обработчик сабмита, сохранение данных в АПИ
  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    props.onUpdateUser({
      name,
      about: description,
    });
  }
  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, props.isOpen]);
  return (
    <PopupWithForm
      name="edit"
      title="Редактировать профиль"
      buttonText="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        id="profile-name"
        className="popup__input popup__input_is_name"
        name="popup__input_is_name"
        type="text"
        placeholder="Имя"
        required
        value={name || ''}
        onChange={handleNameChange}
      />
      <span id="profile-name-error" className="popup__error"></span>
      <input
        id="profile-about"
        className="popup__input popup__input_is_about"
        name="popup__input_is_about"
        type="text"
        placeholder="О себе"
        required
        value={description || ''}
        onChange={handleDescriptionChange}
      />
      <span id="profile-about-error" className="popup__error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
