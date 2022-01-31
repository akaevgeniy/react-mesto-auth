import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import DeleteConfirmPopup from './DeleteConfirmPopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ImagePopup from './ImagePopup';
import CurrentUserContext from '../contexts/CurrentUserContext';
import api from '../utils/Api';

function App() {
  //объявляем стейты попапов и карточки
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isConfirmPopupOpen, setConfirmPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [deletedCard, setDeletedCard] = React.useState({});
  //информация о пользователе
  const [currentUser, setCurrentUser] = React.useState({});
  //данные о карточках
  const [cards, setCards] = React.useState([]);
  //функция, выводящая в консоль ошибку при запросе к АПИ
  const parseError = (err) => {
    console.log(err);
  };
  //создаем эффект, изменяющий при монтировании стейты на данные из сервера
  React.useEffect(() => {
    //Загружаем информацию о пользователе и карточках с сервера, объединенно вызываем запросы с Api, обновляем стейты
    Promise.all([api.getUserProfile(), api.getInitialCards()])
      .then(([userData, placeCards]) => {
        setCurrentUser(userData);
        setCards(placeCards);
      })
      .catch((err) => parseError(err));
  }, []);
  //Функция для постановки/снятия лайка
  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api
      .changeLike(card._id, isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
      })
      .catch((err) => parseError(err));
  }
  //Функция для удаления карточки, запрос к АПИ
  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then((updateCards) => {
        setCards((state) => state.filter((c) => c._id !== card._id));
        console.log(updateCards);
        closeAllPopups();
      })
      .catch((err) => parseError(err));
  }
  //функции, изменяющие значения стейтов
  const handleEditAvatarClick = () => {
    setEditAvatarPopupOpen(true);
  };
  const handleEditProfileClick = () => {
    setEditProfilePopupOpen(true);
  };
  const handleAddPlaceClick = () => {
    setAddPlacePopupOpen(true);
  };
  //функция, открывающая попап подтверждения, принимает стейт карточки для удаления
  const handleDeleteCardClick = (card) => {
    setConfirmPopupOpen(true);
    setDeletedCard(card);
  };
  //функция для закрытия всех попапов
  const closeAllPopups = () => {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setConfirmPopupOpen(false);
    setSelectedCard({});
  };
  //Обработчик, закрывающий попап при нажатии на Escape
  React.useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === 'Escape') {
        closeAllPopups();
      }
    };
    document.addEventListener('keydown', closeByEscape);

    return () => document.removeEventListener('keydown', closeByEscape);
  }, []);
  //функция, присваивающая нужную карточку стейту (для открытия попапа с рисунком)
  const handleCardClick = (card) => {
    setSelectedCard(card);
  };
  //обработчик для обновления информации о пользователе
  const handleUpdateUser = ({ name, about }) => {
    api
      .updateUserProfile({ name, about })
      .then((userInfo) => {
        setCurrentUser(userInfo);
        closeAllPopups();
      })
      .catch((err) => parseError(err));
  };
  //обработчик для обновления аватара пользователя
  const handleUpdateAvatar = (url) => {
    api
      .updateAvatar(url)
      .then((userInfo) => {
        setCurrentUser(userInfo);
        closeAllPopups();
      })
      .catch((err) => parseError(err));
  };
  //функция для добавления новой карточки на сервер, сразу отрисовывается в разметке
  const handleAddPlaceSubmit = ({ name, link }) => {
    api
      .addNewCard({ name, link })
      .then((newPlace) => {
        setCards([newPlace, ...cards]);
        closeAllPopups();
      })
      .catch((err) => parseError(err));
  };
  //отрисовка секций, оборачиваем всё в контекст (данные о пользователе будут доступны со всех компонентов)
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
          onCardDeleteClick={handleDeleteCardClick}
          cards={cards}
          onCardLike={handleCardLike}
        />
        <Footer />
        {/* далее идут компоненты с попапами редактирования профиля, аватра, добавления новой карточки (места), попап подверждения при удалении, попап с изображением  */}
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />

        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />

        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit} />

        <DeleteConfirmPopup isOpen={isConfirmPopupOpen} onClose={closeAllPopups} onCardDelete={handleCardDelete} card={deletedCard} />

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
