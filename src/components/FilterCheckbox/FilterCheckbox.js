import "./FilterCheckbox.css";

function FilterCheckbox({ isOnlyShortMovies, onClickOnlyShortMovies }) {
  function handleChange() {
    onClickOnlyShortMovies();
  }

  return (
    <div className="filter-checkbox">
      <label className="filter-checkbox__label">
        <input
          className="filter-checkbox__input"
          type="checkbox"
          checked={isOnlyShortMovies ? true : false}
          onChange={handleChange}
        />
        <span className="filter-checkbox__switch" />
      </label>
      <span className="filter-checkbox__text">Короткометражки</span>
    </div>
  );
}

export default FilterCheckbox;
