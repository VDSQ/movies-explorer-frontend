import "./SearchForm.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm({
  onSubmitSearch,
  onClickIsOnlyShortMovies,
  isOnlyShortMovies,
}) {
  const currentUser = useContext(CurrentUserContext);
  const location = useLocation();

  const [query, setQuery] = useState("");
  const [errorQuery, setErrorQuery] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    onSubmitSearch(query);
  }

  function handleChange(e) {
    setQuery(e.target.value);

    if (e.target.validity.valid) {
      setErrorQuery("");
    } else {
      setErrorQuery("Нужно ввести ключевое слово.");
    }
  }

  useEffect(() => {
    if (location.pathname === "/movies") {
      setQuery(localStorage.getItem(`${currentUser.email}-query`));
    }
  }, [currentUser, location]);

  const filterCheckbox = (
    <FilterCheckbox
      isOnlyShortMovies={isOnlyShortMovies}
      onClickOnlyShortMovies={onClickIsOnlyShortMovies}
    />
  );

  return (
    <section className="search-form">
      <div className="container search-form__container">
        <form className="search-form__form" onSubmit={handleSubmit}>
          <div className="search-form__input-container search-form__input-container_search">
            <input
              className="search-form__input"
              name="search"
              type="search"
              placeholder="Фильм"
              autoComplete="off"
              value={query || ""}
              onChange={handleChange}
              required
            />
            <button
              className="button search-form__button"
              type="submit"
              disabled={errorQuery ? true : false}
            >
              Поиск
            </button>
          </div>
          <span className="search-form__error">{errorQuery}</span>
          {filterCheckbox}
        </form>
      </div>
    </section>
  );
}

export default SearchForm;
