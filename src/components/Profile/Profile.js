import "./Profile.css";
import Header from "../Header/Header";
import MobileNavigation from "../MobileNavigation/MobileNavigation";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { Fragment, useContext } from "react";

function Profile({ isMobileNavigationOpen, onClickMobileNavigation }) {
  const currentUser = useContext(CurrentUserContext);

  const header = (
    <Header
      isLoggedIn={true}
      onClickMobileNavigation={onClickMobileNavigation}
    />
  );

  const mobileNavigation = (
    <MobileNavigation
      isOpen={isMobileNavigationOpen}
      onClose={onClickMobileNavigation}
    />
  );

  function handleName(e) {}

  function handleEmail(e) {}

  return (
    <Fragment>
      {header}
      <main className="main">
        <section className="profile">
          <div className="container profile__container">
            <h1 className="profile__title">Привет, Виталий!</h1>
            <form className="profile__form">
              <div className="profile__input-container profile__input-container_name">
                <label className="profile__label">Имя</label>
                <input
                  className="profile__input"
                  name="name"
                  placeholder="Имя"
                  type="text"
                  value={currentUser.name || ""}
                  onChange={handleName}
                  minLength="2"
                  maxLength="30"
                  required
                />
              </div>
              <div className="profile__input-container">
                <label className="profile__label">E-mail</label>
                <input
                  className="profile__input"
                  name="email"
                  placeholder="E-mail"
                  type="email"
                  value={currentUser.email || ""}
                  onChange={handleEmail}
                  required
                />
              </div>
              <div className="profile__button-container">
                <button
                  className="button profile__button profile__button_edit"
                  type="button"
                >
                  Редактировать
                </button>
              </div>
            </form>
            <div className="profile__button-container">
              <button
                className="button profile__button profile__button_exit"
                type="button"
              >
                Выйти из аккаунта
              </button>
            </div>
          </div>
        </section>
      </main>
      {mobileNavigation}
    </Fragment>
  );
}

export default Profile;
