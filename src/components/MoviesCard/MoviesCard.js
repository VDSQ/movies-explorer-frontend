import "./MoviesCard.css";
import deleteButton from "../../images/icons/delete-black.svg";
import { Fragment } from "react";
import { useLocation, Link } from "react-router-dom";
import { toTime } from "../../utils/utils";

function MoviesCard({ movie, savedMovie, onSaveMovie, onDeleteMovie }) {
  const location = useLocation();

  function handleSaveMovie() {
    onSaveMovie(movie);
  }

  function handleDeleteMovie() {
    onDeleteMovie(movie);
  }

  const buttonSave = (
    <Fragment>
      <button
        className={`button movie__button-save ${
          savedMovie ? " movie__button-save_is-actived" : ""
        }`}
        type="button"
        aria-label={`${
          savedMovie ? "Удалить фильм из сохранённых" : "Сохранить фильм"
        }`}
        onClick={savedMovie ? handleDeleteMovie : handleSaveMovie}
      />
    </Fragment>
  );

  const buttonDelete = (
    <Fragment>
      <button
        className="button movie__button-delete"
        type="button"
        aria-label="Удалить фильм из сохранённых"
        style={{
          backgroundImage: `url(${deleteButton})`,
        }}
        onClick={handleDeleteMovie}
      />
    </Fragment>
  );

  const trailerLink = (
    <Link to={movie.trailerLink} target="blank">
      <img className="movie__image" src={movie.image} alt={movie.nameRU} />
    </Link>
  );

  return (
    <div className="movie">
      {trailerLink}
      <div className="movie__scription">
        <div className="movie__title-container">
          <h2 className="movie__title">{movie.nameRU}</h2>
          {location.pathname === "/movies" && buttonSave}
          {location.pathname === "/saved-movies" && buttonDelete}
        </div>
        <p className="movie__duration">{toTime(movie.duration)}</p>
      </div>
    </div>
  );
}

export default MoviesCard;
