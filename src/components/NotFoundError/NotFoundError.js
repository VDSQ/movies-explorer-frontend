import "./NotFoundError.css";

function NotFoundError({ navigate }) {
  return (
    <main className="main">
      <section className="not-found-error">
        <div className="container not-found-error__container">
          <h1 className="not-found-error__code">404</h1>
          <p className="not-found-error__text">Страница не найдена</p>
          <button
            className="button not-found-error__button"
            onClick={() => {
              navigate(-1);
            }}
          >
            Назад
          </button>
        </div>
      </section>
    </main>
  );
}

export default NotFoundError;
