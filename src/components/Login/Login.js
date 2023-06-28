import { Link } from "react-router-dom";

function Login() {
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
        <form className="auth__form">
          <div className="auth__input-container">
            <label className="auth__label">E-mail</label>
            <input
              className="auth__input"
              name="email"
              placeholder="E-mail"
              type="email"
            />
          </div>
          <span className="auth__error"></span>
          <div className="auth__input-container">
            <label className="auth__label">Пароль</label>
            <input
              className="auth__input"
              name="password"
              placeholder="Пароль"
              type="password"
            />
          </div>
          <span className="auth__error"></span>
          <button className="button auth__button auth__button_signin" type="button">
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
