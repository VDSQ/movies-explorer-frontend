import "./FilterCheckbox.css";

function FilterCheckbox() {
  return (
    <div className="filter-checkbox">
      <label className="filter-checkbox__label">
        <input type="checkbox" className="filter-checkbox__input" />
        <span className="filter-checkbox__switch" />
      </label>
      <span className="filter-checkbox__text">Короткометражки</span>
    </div>
  );
}

export default FilterCheckbox;
