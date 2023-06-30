import "./NotFoundError.css";
import { Link } from "react-router-dom";

function NotFoundError() {
  const backLink = (
    <Link to="/" className="link not-found-error__link">
      Назад
    </Link>
  );

  return (
    <main className="main">
      <section className="not-found-error">
        <div className="container not-found-error__container">
          <h1 className="not-found-error__code">404</h1>
          <p className="not-found-error__text">Страница не найдена</p>
          {backLink}
        </div>
      </section>
    </main>
  );
}

export default NotFoundError;
