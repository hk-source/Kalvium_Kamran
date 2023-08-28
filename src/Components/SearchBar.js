// Components/SearchBar.js

import React from "react";
import PropTypes from "prop-types";
import "./SearchBar.css"; // Import the CSS

const SearchBar = ({ handleSearch }) => {
  return (
    <div className="search-bar">
      <input
        className="search-input"
        type="text"
        placeholder="Search by name..."
        onChange={(e) => handleSearch(e.target.value)}
      />
      <button className="search-button">Search</button>
    </div>
  );
};

SearchBar.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default SearchBar;
