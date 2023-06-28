import "./AboutProject.css";

function About() {
  return (
    <section className="about-project">
      <div className="container">
        <h2 className="title">О&nbsp;проекте</h2>
        <div className="about-project__paragraphs">
          <div className="about-project__paragraph">
            <p className="about-project__paragraph-title">
              Дипломный проект включал 5 этапов
            </p>
            <p className="about-project__paragraph-text">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </div>
          <div className="about-project__paragraph">
            <p className="about-project__paragraph-title">
              На выполнение диплома ушло 5 недель
            </p>
            <p className="about-project__paragraph-text">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <div className="about-project__paragraphs about-project__paragraphs_calendar">
          <div className="about-project__calendar about-project__calendar_lime">
            <p className="about-project__calendar-title about-project__calendar-title_lime">
              1 неделя
            </p>
            <p className="about-project__calendar-text">Back-end</p>
          </div>
          <div className="about-project__calendar about-project__calendar_gray">
            <p className="about-project__calendar-title about-project__calendar-title_gray">
              4 недели
            </p>
            <p className="about-project__calendar-text">Front-end</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
