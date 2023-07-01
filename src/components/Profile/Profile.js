import "./Profile.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useEffect } from "react";
import { Fragment, useContext } from "react";
import useFormWithValidation from "../../hooks/useFormWithValidation";

function Profile({ onProfile, onSignOut }) {
  const currentUser = useContext(CurrentUserContext);

  const { values, handleChange, resetForm, errors, isValid } =
    useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();

    onProfile(values);
  }

  useEffect(() => {
    if (currentUser) {
      resetForm(currentUser, {}, true);
    }
  }, [currentUser, resetForm]);

  const requirementValidity =
    !isValid ||
    (currentUser.name === values.name && currentUser.email === values.email);

  return (
    <Fragment>
      <main className="main">
        <section className="profile">
          <div className="container profile__container">
            <h1 className="profile__title">{`Привет, ${
              currentUser.name || ""
            }!`}</h1>
            <form
              className="profile__form"
              name="profile"
              onSubmit={handleSubmit}
            >
              <div className="profile__input-container profile__input-container_name">
                <label className="profile__label">Имя</label>
                <input
                  className={`profile__input ${
                    errors.name && " auth__input_invalid"
                  }`}
                  type="text"
                  name="name"
                  minLength="2"
                  maxLength="30"
                  placeholder="Имя"
                  pattern="^[A-Za-zА-Яа-я \-]+$"
                  value={values.name || ""}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="profile__input-container">
                <label className="profile__label">E-mail</label>
                <input
                  className={`profile__input ${
                    errors.email && " auth__input_invalid"
                  }`}
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  value={values.email || ""}
                  onChange={handleChange}
                  required
                />
              </div>
              <span className="profile__error-text auth__error">
                {errors.name || ""}
              </span>
              <span className="profile__error-text profile__error auth__error">
                {errors.email || ""}
              </span>
              <div className="profile__button-container">
                <button
                  type="submit"
                  className={`button profile__button profile__button_edit ${
                    requirementValidity ? "profile__button-edit_disabled" : ""
                  }`}
                  disabled={requirementValidity ? true : false}
                >
                  Редактировать
                </button>
              </div>
            </form>
            <div className="profile__button-container">
              <button
                type="submit"
                className="button profile__button profile__button_exit"
                onClick={onSignOut}
              >
                Выйти из аккаунта
              </button>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
}

export default Profile;
