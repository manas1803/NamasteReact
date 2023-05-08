const FilterComponent = ({ handleFilter }) => {
  return (
    <div className="filter-container">
      <button type="button" onClick={handleFilter}>
        Filter
      </button>
    </div>
  );
};

export default FilterComponent;
