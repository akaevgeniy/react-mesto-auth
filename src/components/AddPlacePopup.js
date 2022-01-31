import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {
  //создаем стейты для названия места и ссылки на изображение
  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');
  //функция, меняющая поле с названием места при изменении значения в инпуте
  function handleNameChange(e) {
    setName(e.target.value);
  }
  //функция, меняющая поле с ссылкой на изображение при изменении значения в инпуте
  function handleLinkChange(e) {
    setLink(e.target.value);
  }
  //Функция сабмита формы для добавления новой карточки, вызываем функцию из пропса
  function handleSubmit(e) {
    e.preventDefault();
    props.onAddPlace({ name, link });
  }
  //эффект для очищения полей ввода при открытии (монтировании)
  React.useEffect(() => {
    setName('');
    setLink('');
  }, [props.isOpen]);
  return (
    <PopupWithForm name="add" title="Новое место" buttonText="Создать" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
      <input
        id="name-card"
        className="popup__input popup__input_is_add-name"
        name="popup__input_is_add_name"
        type="text"
        placeholder="Название"
        value={name || ''}
        onChange={handleNameChange}
        required
      />
      <span id="name-card-error" className="popup__error"></span>
      <input
        id="url-card"
        className="popup__input popup__input_is_add-link"
        name="popup__input_is_add_link"
        type="url"
        placeholder="Ссылка на картинку"
        value={link || ''}
        onChange={handleLinkChange}
        required
      />
      <span id="url-card-error" className="popup__error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
