import { Link } from "react-router-dom";
import { useEffect } from "react";
import useFormWithValidation from "../../hooks/useFormWithValidation";

function Register({ onRegister }) {
  const { values, handleChange, resetForm, errors, isValid } =
    useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();

    onRegister(values);
  }

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  const logo = <Link to="/" className="link logo" />;

  const signInLink = (
    <Link to="/signin" className="link auth__info-link">
      Войти
    </Link>
  );

  return (
    <main className="main">
      <section className="register">
        <div className="container auth__container">
          <div className="auth__header">{logo}</div>
          <h1 className="auth__title">Добро пожаловать!</h1>
          <form className="auth__form" name="register" onSubmit={handleSubmit}>
            <div className="auth__input-container">
              <label className="auth__label">Имя</label>
              <input
                className={`auth__input ${
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
            <span className="auth__error">{errors.name || ""}</span>
            <div className="auth__input-container">
              <label className="auth__label">E-mail</label>
              <input
                className={`auth__input ${
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
            <span className="auth__error">{errors.email || ""}</span>
            <div className="auth__input-container">
              <label className="auth__label">Пароль</label>
              <input
                className={`auth__input ${
                  errors.password && " auth__input_invalid"
                }`}
                type="password"
                name="password"
                minLength="2"
                maxLength="30"
                placeholder="Пароль"
                value={values.password || ""}
                onChange={handleChange}
                required
              />
            </div>
            <span className="auth__error auth__error_password ">
              {errors.password || ""}
            </span>
            <button
              className={`button auth__button ${
                !isValid && "auth__button_disabled"
              }`}
              type="submit"
            >
              Зарегистрироваться
            </button>
          </form>
          <div className="auth__info">
            <p className="auth__info-text">Уже зарегистрированы?</p>
            {signInLink}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Register;
