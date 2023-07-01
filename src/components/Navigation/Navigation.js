import "./Navigation.css";
import ProfileLink from "../ProfileLink/ProfileLink";
import burgerButtonBlack from "../../images/icons/burger-black.svg";
import burgerButtonWhite from "../../images/icons/burger-white.svg";
import { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";

function Navigation({ isLoggedIn, onClickBurger }) {
  const location = useLocation();

  const mainNavigation = (
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

  const profileLink = <ProfileLink />;

  const moviesNavigation = (
    <Fragment>
      <div className="navigation__container">
        <nav className="navigation">
          <ol className="navigation__list">
            <li className="navigation__item">
              <Link
                to="/movies"
                className={
                  "link navigation__link navigation__link_movies" +
                  (location.pathname === "/" ? " navigation__link_white" : "")
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
                  (location.pathname === "/" ? " navigation__link_white" : "")
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
        className={
          "button navigation__burger" +
          (location.pathname === "/" ? " navigation__burger_navy" : "")
        }
        style={{
          backgroundImage: `url(${
            location.pathname === "/" ? burgerButtonWhite : burgerButtonBlack
          })`,
        }}
        onClick={onClickBurger}
      />
    </Fragment>
  );

  return !isLoggedIn ? mainNavigation : moviesNavigation;
}

export default Navigation;
