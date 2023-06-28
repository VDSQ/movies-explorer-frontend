import "./InfoTooltip.css";
import successIcon from "../../images/icons/success.svg";
import errorIcon from "../../images/icons/error.svg";

function InfoTooltip({ isOpen, onClose, isSuccessStatus, message }) {
  const infoTooltipIsOpenedClassName = isOpen ? " info-tooltip_is-opened" : "";

  return (
    <div className={"info-tooltip" + infoTooltipIsOpenedClassName}>
      <div className="info-tooltip__container">
        <button
          type="button"
          className="button info-tooltip__button"
          aria-label="Закрыть"
          onClick={onClose}
        />
        <img
          src={isSuccessStatus ? successIcon : errorIcon}
          className="info-tooltip__icon"
          alt={isSuccessStatus ? "Success" : "Error"}
        />
        <p className="info-tooltip__text">{message}</p>
      </div>
    </div>
  );
}

export default InfoTooltip;
