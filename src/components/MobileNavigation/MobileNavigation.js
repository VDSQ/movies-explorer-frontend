import "./MobileNavigation.css";
import { Link, useLocation } from "react-router-dom";
import ProfileLink from "../ProfileLink/ProfileLink";

function MobileNavigation({ isOpen, onClose }) {
  const location = useLocation();

  const mainLink = (
    <Link
      to="/"
      className={`link mobile-navigation__link ${
        location.pathname === "/" ? "mobile-navigation__link_is-actived" : ""
      }`}
    >
      Главная
    </Link>
  );

  const moviesLink = (
    <Link
      to="/movies"
      className={`link mobile-navigation__link ${
        location.pathname === "/movies"
          ? "mobile-navigation__link_is-actived"
          : ""
      }`}
    >
      Фильмы
    </Link>
  );

  const savedMoviesLink = (
    <Link
      to="/saved-movies"
      className={`link mobile-navigation__link ${
        location.pathname === "/saved-movies"
          ? "mobile-navigation__link_is-actived"
          : ""
      }`}
    >
      Сохранённые фильмы
    </Link>
  );

  const profileLink = <ProfileLink />;

  return (
    <div
      className={
        "mobile-navigation" + (isOpen ? " mobile-navigation_is-opened" : "")
      }
    >
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
