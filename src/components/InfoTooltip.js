import okregister from '../images/register-ok.png';
import errorregister from '../images/register-error.png';
//функция для отображения попапа для информирования пользователя об успешной (или не очень) регистрации
function InfoTooltip({ isOpen, onClose, tooltipContent }) {
  return (
    <div className={`popup ${isOpen ? 'popup_is-opened' : ''}`}>
      <div className="popup__container">
        <button className="popup__close" type="button" aria-label="Закрыть окно" onClick={onClose}></button>
        <img className="popup__infoicon" src={tooltipContent.picture ? okregister : errorregister} />
        <h2 className={`popup__title popup__title_tooltip`}>{tooltipContent.text}</h2>
      </div>
    </div>
  );
}

export default InfoTooltip;
