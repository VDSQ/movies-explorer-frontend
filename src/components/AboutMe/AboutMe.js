import "./AboutMe.css";
import photo from "../../images/photo.svg";
import Portofolio from "../Portofolio/Portofolio";
import { Link } from "react-router-dom";

function AboutMe() {
  const githubLink = (
    <Link
      to="https://github.com/VDSQ"
      target="_blank"
      className="link about-me__link"
    >
      Github
    </Link>
  );

  const portofolio = <Portofolio />;

  return (
    <section className="about-me">
      <div className="container about-me__container">
        <h2 className="title about-me__title">Студент</h2>
        <div className="about-me__profile">
          <div className="about-me__info">
            <p className="subtitle about-me__name">Виталий</p>
            <p className="about-me__job">Фронтенд-разработчик, 30 лет</p>
            <p className="about-me__about">
              Я родился и живу в Саратове, закончил факультет экономики СГУ. У
              меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
              бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
              Контур». После того, как прошёл курс по веб-разработке, начал
              заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
            {githubLink}
          </div>
          <img className="about-me__photo" src={photo} alt="Foto" />
        </div>
        {portofolio}
      </div>
    </section>
  );
}

export default AboutMe;
