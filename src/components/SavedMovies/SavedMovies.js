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
    const filteredMovieList = filterMoviesByUserQuery(savedMovies, query);
    const moviesOnPageList = isOnlyShortMovies
      ? filterShortMovies(filteredMovieList)
      : filteredMovieList;

    setFilteredMovies(filteredMovieList);
    setMoviesOnPage(moviesOnPageList);
  }

  function handleIsOnlyShortMovies() {
    localStorage.setItem(
      `${currentUser.email}-isOnlyShortMovies`,
      !isOnlyShortMovies
    );

    if (!isOnlyShortMovies) {
      const shortMovieList = filterShortMovies(filteredMovies);

      setMoviesOnPage(shortMovieList);
    } else {
      setMoviesOnPage(filteredMovies);
    }

    setIsOnlyShortMovies(!isOnlyShortMovies);
  }

  useEffect(() => {
    setMoviesOnPage(savedMovies);
    setFilteredMovies(savedMovies);
  }, [savedMovies]);

  useEffect(() => {
    !moviesOnPage.length
      ? setErrorLoading("Ничего не найдено.")
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
