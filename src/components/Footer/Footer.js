import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  const yandexPracticumSiteLink = (
    <Link
      to="https://practicum.yandex.ru/"
      target="_blank"
      className="link footer__link"
    >
      Яндекс.Практикум
    </Link>
  );

  const githubSiteLink = (
    <Link
      to="https://github.com/VDSQ"
      target="_blank"
      className="link footer__link"
    >
      Github
    </Link>
  );

  return (
    <footer className="footer">
      <div className="container footer__container">
        <p className="footer__top">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
        <div className="footer__bottom">
          <p className="footer__copyright">© 2023</p>
          <nav className="footer__nav">
            <ol className="footer__list">
              <li className="footer__item">{yandexPracticumSiteLink}</li>
              <li className="footer__item">{githubSiteLink}</li>
            </ol>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
