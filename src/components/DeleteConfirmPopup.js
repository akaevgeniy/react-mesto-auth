import React from 'react';
import PopupWithForm from './PopupWithForm';
//функция попапа подтверждения удаления
function DeleteConfirmPopup(props) {
  //переопределяем метод, при нажатии ка сабмит происходит удаление карточки
  function handleSubmit(e) {
    e.preventDefault();
    props.onCardDelete(props.card);
  }
  return <PopupWithForm name="confirm" title="Вы уверены?" buttonText="Да" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit} />;
}

export default DeleteConfirmPopup;
