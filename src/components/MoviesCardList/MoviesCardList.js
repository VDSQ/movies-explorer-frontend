import "./MoviesCardList.css";
import { useState, useEffect, Fragment } from "react";
import { useLocation } from "react-router-dom";
import useScreenWidth from "../../hooks/useScreenWidth";
import { DEVICE_PARAMS } from "../../utils/config";
import { getSavedMovie } from "../../utils/utils";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ movies, savedMovies, onSaveMovie, onDeleteMovie }) {
  const location = useLocation();
  const screenWidth = useScreenWidth();

  const { desktop, tablet, mobile } = DEVICE_PARAMS;

  const [cardsParams, setCardsParams] = useState({});
  const [moviesOnPage, setMoviesOnPage] = useState([]);

  function handleMoreMoviesClick() {
    const start = moviesOnPage.length;
    const end = start + cardsParams.more;

    if (movies.length - start > 0) {
      const moreMovies = movies.slice(start, end);

      setMoviesOnPage([...moviesOnPage, ...moreMovies]);
    }
  }

  useEffect(() => {
    if (location.pathname === "/movies") {
      if (screenWidth >= desktop.width) {
        setCardsParams({
          init: 12,
          more: 4,
        });
      } else if (screenWidth >= tablet.width) {
        setCardsParams(desktop.cards);
      } else if (screenWidth >= mobile.width) {
        setCardsParams(tablet.cards);
      } else {
        setCardsParams(mobile.cards);
      }
    }
  }, [screenWidth, desktop, tablet, mobile, location.pathname]);

  useEffect(() => {
    if (movies.length) {
      const initialMovies = movies.slice(0, cardsParams.init);

      setMoviesOnPage(initialMovies);
    }
  }, [movies, cardsParams.init]);

  const moviesCardList = (
    <Fragment>
      {moviesOnPage.map((movie) => (
        <MoviesCard
          key={movie.id || movie._id}
          movie={movie}
          savedMovie={getSavedMovie(savedMovies, movie)}
          onSaveMovie={onSaveMovie}
          onDeleteMovie={onDeleteMovie}
        />
      ))}
    </Fragment>
  );

  const moreButton = (
    <Fragment>
      <button
        className="button movies__more"
        type="button"
        onClick={handleMoreMoviesClick}
      >
        Ещё
      </button>
    </Fragment>
  );

  return (
    <section className="movies">
      <div className="container movies__container">{moviesCardList}</div>
      <div className="container movies__more-container">
        {location.pathname === "/movies" &&
          moviesOnPage.length < movies.length &&
          moreButton}
      </div>
    </section>
  );
}

export default MoviesCardList;
