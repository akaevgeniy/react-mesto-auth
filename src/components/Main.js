//импортируем нужные компоненты
import React from 'react';
import edit_avatar from '../images/profile-avatar-button.svg';
import Card from './Card';
import CurrentUserContext from '../contexts/CurrentUserContext';

function Main(props) {
  //данные о пользователе, делаем подписку на контекст
  const currentUser = React.useContext(CurrentUserContext);

  //jsx разметка компонента Main
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__info">
          <div className="profile__avatar-container">
            <img src={currentUser.avatar} alt="Аватар" className="profile__avatar" onClick={props.onEditAvatar} />
            <img src={edit_avatar} alt="Поменять аватар" className="profile__avatar-icon" />
          </div>
          <div className="profile__text">
            <div className="profile__title">
              <h1 className="profile__name">{currentUser.name}</h1>
              <button className="profile__edit-button" type="button" aria-label="Редактировать" onClick={props.onEditProfile}></button>
            </div>
            <p className="profile__about">{currentUser.about}</p>
          </div>
        </div>
        <button className="profile__add-button" type="button" aria-label="Добавить" onClick={props.onAddPlace}></button>
      </section>
      <section aria-label="label" className="elements">
        {props.cards.map((elem) => (
          <Card
            key={elem._id}
            card={elem}
            onCardClick={props.onCardClick}
            onCardLike={props.onCardLike}
            onCardDeleteClick={props.onCardDeleteClick}
            onDelete={props.onCardDelete}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
