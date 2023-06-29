import { Link } from "react-router-dom";

function Register() {
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
          <form className="auth__form">
            <div className="auth__input-container">
              <label className="auth__label">Имя</label>
              <input
                className="auth__input"
                name="name"
                placeholder="Имя"
                type="text"
                minLength="2"
                maxLength="30"
                required
              />
            </div>
            <span className="auth__error"></span>
            <div className="auth__input-container">
              <label className="auth__label">E-mail</label>
              <input
                className="auth__input"
                name="email"
                placeholder="E-mail"
                type="email"
                required
              />
            </div>
            <span className="auth__error"></span>
            <div className="auth__input-container">
              <label className="auth__label">Пароль</label>
              <input
                className="auth__input auth__input_invalid"
                name="password"
                placeholder="Пароль"
                type="password"
                minLength="2"
                maxLength="30"
                required
              />
            </div>
            <span className="auth__error auth__error_password ">
              Что-то пошло не так...
            </span>
            <button className="button auth__button" type="button">
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
