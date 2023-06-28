import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ movies, isSavedMovies }) {
  const moviesElements = movies.map((movie) => (
    <MoviesCard key={movie.id} movie={movie} isSavedMovies={isSavedMovies} />
  ));

  return (
    <section className="movies">
      <div className="container movies__container">{moviesElements}</div>
      <div className="container movies__button-container">
        <button className="button movies__button" type="button">
          Ещё
        </button>
      </div>
    </section>
  );
}

export default MoviesCardList;
