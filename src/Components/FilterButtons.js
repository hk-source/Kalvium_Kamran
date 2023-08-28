// Components/FilterButtons.js

import React from "react";
import PropTypes from "prop-types";
import "./FilterButtons.css";

const FilterButtons = ({ handleFilter }) => {
  return (
    <div className="filter-buttons">
      <button onClick={() => handleFilter("all")}>All</button>
      <button onClick={() => handleFilter("present")}>Present</button>
      <button onClick={() => handleFilter("absent")}>Absent</button>
    </div>
  );
};

FilterButtons.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default FilterButtons;
