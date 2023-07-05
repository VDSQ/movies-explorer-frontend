import { Link } from "react-router-dom";
import { useEffect } from "react";
import useFormWithValidation from "../../hooks/useFormWithValidation";

function Login({ onLogin }) {
  const { values, handleChange, resetForm, errors, isValid } =
    useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();

    onLogin(values);
  }

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  const logo = <Link to="/" className="link logo" />;

  const signUpLink = (
    <Link to="/signup" className="link auth__info-link">
      Регистрация
    </Link>
  );

  return (
    <section className="login">
      <div className="container auth__container">
        <div className="auth__header">{logo}</div>
        <h1 className="auth__title">Рады видеть!</h1>
        <form className="auth__form" name="login" onSubmit={handleSubmit}>
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
              placeholder="Пароль"
              minLength="2"
              maxLength="40"
              value={values.password || ""}
              onChange={handleChange}
              required
            />
          </div>
          <span className="auth__error auth__error_signin-password">
            {errors.password || ""}
          </span>
          <button
            className={`button auth__button ${
              !isValid && "auth__button_disabled"
            }`}
            type="submit"
          >
            Войти
          </button>
        </form>
        <div className="auth__info">
          <p className="auth__info-text">Ещё не зарегистрированы?</p>
          {signUpLink}
        </div>
      </div>
    </section>
  );
}

export default Login;
