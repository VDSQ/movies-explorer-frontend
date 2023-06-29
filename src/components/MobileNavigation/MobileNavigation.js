import "./MobileNavigation.css";
import ProfileLink from "../ProfileLink/ProfileLink";
import { Link } from "react-router-dom";

function MobileNavigation({ isOpen, onClose }) {
  const mainLink = (
    <Link to="/" className="link mobile-navigation__link" onClick={onClose}>
      Главная
    </Link>
  );

  const moviesLink = (
    <Link
      to="/movies"
      className="link mobile-navigation__link mobile-navigation__link_is-actived"
      onClick={onClose}
    >
      Фильмы
    </Link>
  );

  const savedMoviesLink = (
    <Link
      to="/saved-movies"
      className="link mobile-navigation__link"
      onClick={onClose}
    >
      Сохранённые фильмы
    </Link>
  );

  const profileLink = <ProfileLink onCloseMobileNavigation={onClose} />;

  const mobileNavigationIsOpenedClassName = isOpen
    ? " mobile-navigation_is-opened"
    : "";

  return (
    <div className={"mobile-navigation" + mobileNavigationIsOpenedClassName}>
      <div className="mobile-navigation__container">
        <button
          className="button mobile-navigation__button-close"
          onClick={onClose}
        />
        <div className="mobile-navigation-nav">
          <nav className="mobile-navigation__nav">
            <ol className="mobile-navigation__list">
              <li className="mobile-navigation__item">{mainLink}</li>
              <li className="mobile-navigation__item">{moviesLink}</li>
              <li className="mobile-navigation__item">{savedMoviesLink}</li>
            </ol>
          </nav>
        </div>
        <div className="mobile-navigation__profile-link">{profileLink}</div>
      </div>
    </div>
  );
}

export default MobileNavigation;
