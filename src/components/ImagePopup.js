//функция для отображения попапа с изображением
function ImagePopup(props) {
  return (
    <div className={`popup popup_form_image ${props.card.link ? 'popup_is-opened' : ''}`}>
      <figure className="popup__picture">
        <button className="popup__close" type="button" aria-label="Закрыть окно" onClick={props.onClose}></button>
        <img src={props.card.link} alt={props.card.name} className="popup__photo" />
        <figcaption className="popup__caption">{props.card.name}</figcaption>
      </figure>
    </div>
  );
}

export default ImagePopup;
