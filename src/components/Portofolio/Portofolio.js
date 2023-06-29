import "./Portofolio.css";
import { Link } from "react-router-dom";

function Portofolio() {
  const staticSiteLink = (
    <Link
      to="https://github.com/VDSQ/how-to-learn"
      target="_blank"
      className="link portfolio__link"
    >
      Статичный сайт
    </Link>
  );

  const adaptiveSiteLink = (
    <Link
      to="https://github.com/VDSQ/russian-travel"
      target="_blank"
      className="link portfolio__link"
    >
      Адаптивный сайт
    </Link>
  );

  const singlePageAppLink = (
    <Link
      to="https://github.com/VDSQ/react-mesto-api-full"
      target="_blank"
      className="link portfolio__link"
    >
      Одностраничное приложение
    </Link>
  );

  return (
    <div className="portofolio">
      <h3 className="portofolio__title">Портфолио</h3>
      <ul className="portfolio__list">
        <li className="portfolio__item">{staticSiteLink}</li>
        <li className="portfolio__item">{adaptiveSiteLink}</li>
        <li className="portfolio__item portfolio__item_last">
          {singlePageAppLink}
        </li>
      </ul>
    </div>
  );
}

export default Portofolio;
