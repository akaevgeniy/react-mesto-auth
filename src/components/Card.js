import React from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';
function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);
  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = props.card.owner._id === currentUser._id;
  // Создаём переменную, которую после зададим в `className` для кнопки удаления
  const cardDeleteButtonClassName = `element__delete ${isOwn ? '' : 'element__delete_is-hidden'}`;
  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = props.card.likes.some((i) => i._id === currentUser._id);
  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = `element__like ${isLiked ? 'element__like_active' : ''}`;
  //функция, откывающая попап с изображением, вызывается при нажатии на фото карточки
  function handleClick() {
    props.onCardClick(props.card);
  }
  //обработчик клика по кнопке лайка, вызываем из него onCardLike с аргументом card
  function handleLikeClick() {
    props.onCardLike(props.card);
  }
  //обработчик клика по удаления карточки, передаем карточку для удаления
  function handleDeleteClick() {
    props.onCardDeleteClick(props.card);
  }
  return (
    <article className="element">
      <button className={cardDeleteButtonClassName} type="button" onClick={handleDeleteClick}></button>
      <img src={props.card.link} alt={props.card.name} className="element__photo" onClick={handleClick} />
      <div className="element__text">
        <h2 className="element__title">{props.card.name}</h2>
        <div className="element__like-container">
          <button className={cardLikeButtonClassName} type="button" onClick={handleLikeClick}></button>
          <p className="element__like-count">{props.card.likes.length}</p>
        </div>
      </div>
    </article>
  );
}

export default Card;
