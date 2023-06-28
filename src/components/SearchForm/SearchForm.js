import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  const filterCheckbox = <FilterCheckbox />;

  return (
    <section className="search-form">
      <div className="container search-form__container">
        <form className="search-form__form">
          <div className="search-form__input-container search-form__input-container_search">
            <input
              className="search-form__input"
              type="search"
              name="search"
              placeholder="Фильм"
              required
            />
            <button className="button search-form__button" type="submit">
              Поиск
            </button>
          </div>
          {filterCheckbox}
        </form>
      </div>
    </section>
  );
}

export default SearchForm;
