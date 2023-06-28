import "./NotFoundError.css";
import { Link } from "react-router-dom";

function NotFoundError() {
  const backLink = (
    <Link to="/" className="link not-found-error__link">
      Назад
    </Link>
  );

  return (
    <section className="not-found-error">
      <div className="container not-found-error__container">
        <p className="not-found-error__code">404</p>
        <p className="not-found-error__text">Страница не найдена</p>
        {backLink}
      </div>
    </section>
  );
}

export default NotFoundError;
