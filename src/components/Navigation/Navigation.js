import "./Navigation.css";
import ProfileLink from "../ProfileLink/ProfileLink";
import burgerBlackButton from "../../images/icons/burger-black.svg";
import burgerWhiteButton from "../../images/icons/burger-white.svg";
import { Fragment } from "react";
import { Link } from "react-router-dom";

function Navigation({ isLoggedIn, isMainPage, onClickMobileNavigation }) {
  const notLoggedInNav = (
    <Fragment>
      <nav className="navigation">
        <ol className="navigation__list navigation_list_not-loggedin">
          <li className="navigation__item">
            <Link
              to="/signup"
              className="link navigation__link navigation__link_white"
            >
              Регистрация
            </Link>
          </li>
          <li className="navigation__item">
            <Link
              to="/signin"
              className="link navigation__link navigation__link_signin"
            >
              Войти
            </Link>
          </li>
        </ol>
      </nav>
    </Fragment>
  );

  const {
    headerNavLinkWhiteClassName,
    navigationBurgerNavyClassName,
    burgerButton,
  } = isMainPage
    ? {
        headerNavLinkWhiteClassName: " navigation__link_white",
        navigationBurgerNavyClassName: " navigation__burger_navy",
        burgerButton: burgerWhiteButton,
      }
    : {
        headerNavLinkWhiteClassName: "",
        navigationBurgerNavyClassName: "",
        burgerButton: burgerBlackButton,
      };

  const profileLink = <ProfileLink isMainPage={isMainPage} />;

  const loggedInNav = (
    <Fragment>
      <div className="navigation__container">
        <nav className="navigation">
          <ol className="navigation__list">
            <li className="navigation__item">
              <Link
                to="/movies"
                className={
                  "link navigation__link navigation__link_movies" +
                  headerNavLinkWhiteClassName
                }
              >
                Фильмы
              </Link>
            </li>
            <li className="navigation__item">
              <Link
                to="/saved-movies"
                className={
                  "link navigation__link navigation__link_saved-movies" +
                  headerNavLinkWhiteClassName
                }
              >
                Сохранённые фильмы
              </Link>
            </li>
          </ol>
        </nav>
        {profileLink}
      </div>
      <button
        className={"button navigation__burger" + navigationBurgerNavyClassName}
        style={{
          backgroundImage: `url(${burgerButton})`,
        }}
        onClick={onClickMobileNavigation}
      />
    </Fragment>
  );

  return isLoggedIn ? loggedInNav : notLoggedInNav;
}

export default Navigation;
