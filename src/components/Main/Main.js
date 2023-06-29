import Header from "../Header/Header";
import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import MobileNavigation from "../MobileNavigation/MobileNavigation";
import Footer from "../Footer/Footer";
import { Fragment } from "react";

function Main({ isMobileNavigationOpen, onClickMobileNavigation }) {
  return (
    <Fragment>
      <Header
        isMainPage={true}
        onClickMobileNavigation={onClickMobileNavigation}
      />
      <main className="main">
        <Promo onClickMobileNavigation={onClickMobileNavigation} />
        <AboutProject />
        <Techs />
        <AboutMe />
        <MobileNavigation
          isOpen={isMobileNavigationOpen}
          onClose={onClickMobileNavigation}
        />
      </main>
      <Footer />
    </Fragment>
  );
}

export default Main;
