import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useContext, useState, useEffect, Fragment } from "react";
import { moviesApi } from "../../utils/MoviesApi";
import {
  filterShortMovies,
  filterMoviesByUserQuery,
  changeMovies,
} from "../../utils/utils";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";

function Movies({ onSaveMovie, onDeleteMovie, savedMovies }) {
  const currentUser = useContext(CurrentUserContext);

  const [movies, setMovies] = useState([]);
  const [initialMovies, setInitialMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isOnlyShortMovies, setIsOnlyShortMovies] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorLoading, setErrorLoading] = useState("");

  function handleFilteredMovies(movies, query, isOnlyShort) {
    const movieList = filterMoviesByUserQuery(movies, query);

    setInitialMovies(movieList);

    setFilteredMovies(isOnlyShort ? filterShortMovies(movieList) : movieList);
    localStorage.setItem(
      `${currentUser.email}-movies`,
      JSON.stringify(movieList)
    );
  }

  function handleSearchSubmit(query) {
    localStorage.setItem(`${currentUser.email}-query`, query);

    if (!movies.length) {
      setIsLoading(true);

      moviesApi
        .getMovies()
        .then((movies) => {
          setMovies(movies);

          const changedMovieList = changeMovies(movies);

          handleFilteredMovies(changedMovieList, query, isOnlyShortMovies);
        })
        .catch(() => {
          setErrorLoading(
            "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз."
          );
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      handleFilteredMovies(movies, query, isOnlyShortMovies);
    }
  }

  function handleIsOnlyShortMovies() {
    localStorage.setItem(
      `${currentUser.email}-isOnlyShortMovies`,
      !isOnlyShortMovies
    );

    if (!isOnlyShortMovies) {
      const shortMovieList = filterShortMovies(initialMovies);

      setFilteredMovies(shortMovieList);
    } else {
      setFilteredMovies(initialMovies);
    }

    setIsOnlyShortMovies(!isOnlyShortMovies);
  }

  useEffect(() => {
    const localMovies =
      JSON.parse(localStorage.getItem(`${currentUser.email}-movies`)) || [];

    setInitialMovies(localMovies);

    if (
      localStorage.getItem(`${currentUser.email}-isOnlyShortMovies`) === "true"
    ) {
      setIsOnlyShortMovies(true);

      const shortMovieList = filterShortMovies(localMovies);

      setFilteredMovies(shortMovieList);
    } else {
      setIsOnlyShortMovies(false);
      setFilteredMovies(localMovies);
    }
  }, [currentUser]);

  useEffect(() => {
    !filteredMovies.length
      ? setErrorLoading("Ничего не найдено.")
      : setErrorLoading("");
  }, [filteredMovies]);

  const searchForm = (
    <SearchForm
      onSubmitSearch={handleSearchSubmit}
      onClickIsOnlyShortMovies={handleIsOnlyShortMovies}
      isOnlyShortMovies={isOnlyShortMovies}
    />
  );

  const moviesCardList = (
    <MoviesCardList
      movies={filteredMovies}
      savedMovies={savedMovies}
      onSaveMovie={onSaveMovie}
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

  const preloader = <Preloader />;

  return (
    <Fragment>
      <main className="main">
        {searchForm}
        {isLoading ? preloader : !errorLoading ? moviesCardList : error}
      </main>
    </Fragment>
  );
}

export default Movies;
