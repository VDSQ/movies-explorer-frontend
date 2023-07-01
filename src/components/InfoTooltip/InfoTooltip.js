import "./InfoTooltip.css";
import successIcon from "../../images/icons/success.svg";
import errorIcon from "../../images/icons/error.svg";

function InfoTooltip({ params, onClose }) {
  const { isOpen, isSuccess, message } = params;

  return (
    <div className={`info-tooltip ${isOpen && "info-tooltip_is-opened"}`}>
      <div className="info-tooltip__container">
        <button
          type="button"
          className="button info-tooltip__button"
          aria-label="Закрыть"
          onClick={onClose}
        />
        <img
          src={isSuccess ? successIcon : errorIcon}
          className="info-tooltip__icon"
          alt={isSuccess ? "Success" : "Error"}
        />
        <p className="info-tooltip__text">{message}</p>
      </div>
    </div>
  );
}

export default InfoTooltip;
