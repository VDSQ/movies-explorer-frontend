import "./Movies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MobileNavigation from "../MobileNavigation/MobileNavigation";
import Footer from "../Footer/Footer";
import movies from "../../utils/movies";
import { Fragment } from "react";

function Movies({ isMobileNavigationOpen, onClickMobileNavigation }) {
  const header = (
    <Header
      isLoggedIn={true}
      onClickMobileNavigation={onClickMobileNavigation}
    />
  );

  const searchForm = <SearchForm />;

  const moviesCardList = <MoviesCardList movies={movies} />;

  const mobileNavigation = (
    <MobileNavigation
      isOpen={isMobileNavigationOpen}
      onClose={onClickMobileNavigation}
    />
  );

  const footer = <Footer />;

  return (
    <Fragment>
      {header}
      {searchForm}
      {moviesCardList}
      {mobileNavigation}
      {footer}
    </Fragment>
  );
}

export default Movies;
