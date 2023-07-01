import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useState, useContext, useEffect, Fragment } from "react";
import { filterShortMovies, filterMoviesByUserQuery } from "../../utils/utils";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies({ savedMovies, onDeleteMovie }) {
  const currentUser = useContext(CurrentUserContext);

  const [moviesOnPage, setMoviesOnPage] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isOnlyShortMovies, setIsOnlyShortMovies] = useState(false);
  const [errorLoading, setErrorLoading] = useState("");

  function handleSearchSubmit(query) {
    const moviesList = filterMoviesByUserQuery(savedMovies, query);

    setFilteredMovies(moviesList);
    setMoviesOnPage(moviesList);
  }

  function handleIsOnlyShortMovies() {
    localStorage.setItem(
      `${currentUser.email}-isOnlyShortMovies`,
      !isOnlyShortMovies
    );
    setIsOnlyShortMovies(!isOnlyShortMovies);

    !isOnlyShortMovies
      ? setMoviesOnPage(filterShortMovies(filteredMovies))
      : setMoviesOnPage(filteredMovies);
  }

  useEffect(() => {
    setFilteredMovies(savedMovies);

    if (
      localStorage.getItem(`${currentUser.email}-isOnlyShortMovies`) === "true"
    ) {
      setIsOnlyShortMovies(true);
      setMoviesOnPage(filterShortMovies(savedMovies));
    } else {
      setIsOnlyShortMovies(false);
      setMoviesOnPage(savedMovies);
    }
  }, [savedMovies, currentUser]);

  useEffect(() => {
    !moviesOnPage.length
      ? setErrorLoading("Ничего не найдено")
      : setErrorLoading("");
  }, [moviesOnPage]);

  const searchForm = (
    <SearchForm
      onSubmitSearch={handleSearchSubmit}
      onClickIsOnlyShortMovies={handleIsOnlyShortMovies}
      isOnlyShortMovies={isOnlyShortMovies}
    />
  );

  const moviesCardList = (
    <MoviesCardList
      movies={moviesOnPage}
      savedMovies={savedMovies}
      onDeleteMovie={onDeleteMovie}
    />
  );

  const error = (
    <Fragment>
      <section className="movies">
        <div className="container movies__error-container">
          <p className="movies__error">{errorLoading}</p>
        </div>
      </section>
    </Fragment>
  );

  return (
    <Fragment>
      <main className="main">
        {searchForm}
        {!errorLoading ? moviesCardList : error}
      </main>
    </Fragment>
  );
}

export default SavedMovies;
