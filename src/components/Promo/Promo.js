import "./Promo.css";
import Header from "../Header/Header";

function Promo({ onClickMobileNavigation }) {
  const header = (
    <Header
      isMainPage={true}
      onClickMobileNavigation={onClickMobileNavigation}
    />
  );

  return (
    <section className="promo">
      {header}
      <div className="container promo__container">
        <h1 className="title promo__title">
          Учебный проект студента факультета Веб-разработки.
        </h1>
      </div>
    </section>
  );
}

export default Promo;
