import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { Fragment } from "react";

function MoviesCardList({ movies, isSavedMovies }) {
  const moviesElements = movies.map((movie) => (
    <MoviesCard key={movie.id} movie={movie} isSavedMovies={isSavedMovies} />
  ));

  const moreButton = (
    <Fragment>
      <button className="button movies__button" type="button">
        Ещё
      </button>
    </Fragment>
  );

  const moviesButtonMoreContainerClassName = isSavedMovies
    ? " movies__button-more-container"
    : "";

  return (
    <section className="movies">
      <div className="container movies__container">{moviesElements}</div>
      <div
        className={
          "container movies__button-container" +
          moviesButtonMoreContainerClassName
        }
      >
        {!isSavedMovies ? moreButton : ""}
      </div>
    </section>
  );
}

export default MoviesCardList;
