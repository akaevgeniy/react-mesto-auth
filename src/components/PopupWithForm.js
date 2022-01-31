//компонент для всех попапов с формой, присваиваем нужные пропсы классам и другим свойствам
function PopupWithForm({ name, isOpen, title, buttonText, onClose, onSubmit, children }) {
  return (
    <div className={`popup popup_form_${name} ${isOpen ? 'popup_is-opened' : ''}`}>
      <div className="popup__container">
        <button className="popup__close" type="button" aria-label="Закрыть окно" onClick={onClose}></button>
        <form className={`popup__form popup__form_${name}`} name={`popup__form_${name}`} onSubmit={onSubmit}>
          <h2 className={`popup__title popup__title_${name}`}>{title}</h2>
          {children}
          <input type="submit" className="popup__submit" value={buttonText} />
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
