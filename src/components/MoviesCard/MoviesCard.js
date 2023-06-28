import "./MoviesCard.css";
import deleteButton from "../../images/icons/delete-black.svg";
import { Fragment } from "react";

function MoviesCard({ movie, isSavedMovies }) {
  const movieButtonActiveClassName =
    movie.id % 2 === 0 ? " movie__button-save_is-actived" : "";

  const button = isSavedMovies ? (
    <Fragment>
      <button
        className="button movie__button-delete"
        type="button"
        aria-label="Сохранить"
        style={{
          backgroundImage: `url(${deleteButton})`,
        }}
      />
    </Fragment>
  ) : (
    <Fragment>
      <button
        className={"button movie__button-save" + movieButtonActiveClassName}
        type="button"
        aria-label="Сохранить"
      />
    </Fragment>
  );

  return (
    <div className="movie">
      <img className="movie__image" src={movie.image} alt={movie.title} />
      <div className="movie__scription">
        <div className="movie__title-container">
          <h2 className="movie__title">{movie.title}</h2>
          {button}
        </div>
        <p className="movie__duration">{movie.duration}</p>
      </div>
    </div>
  );
}

export default MoviesCard;
