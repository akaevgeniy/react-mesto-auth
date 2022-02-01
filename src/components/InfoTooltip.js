//функция для отображения попапа для информирования пользователя об успешной (или не очень) регистрации
function InfoTooltip({ isOpen, onClose, picture }) {
  return (
    <div className={`popup ${isOpen ? 'popup_is-opened' : ''}`}>
      <div className="popup__container">
        <button className="popup__close" type="button" aria-label="Закрыть окно" onClick={onClose}></button>
        <img className="popup__infoicon" src={picture} />
        <h2 className={`popup__title popup__title_tooltip`}>Вы успешно зарегистрировались!</h2>
      </div>
    </div>
  );
}

export default InfoTooltip;
