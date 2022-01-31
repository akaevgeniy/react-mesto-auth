import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {
  //создаем реф для обращения к инпуту в ДОМ
  const avatarInputRef = React.useRef();
  //Функция сабмита формы для изменения аватара
  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar(avatarInputRef.current.value);
  }
  return (
    <PopupWithForm
      name="avatar-update"
      title="Обновить аватар"
      buttonText="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        ref={avatarInputRef}
        id="url-avatar"
        className="popup__input popup__input_is_avatar-link"
        name="popup__input_is_avatar_link"
        type="url"
        placeholder="Ссылка на аватар"
        required
      />
      <span id="url-avatar-error" className="popup__error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
