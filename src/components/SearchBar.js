import React from "react";

const SearchBar = ({ searchMovie, setSearchMovie }) => {
  return (
    <div>
      <label>Search movie</label>
      <input
        type="search"
        value={searchMovie}
        onChange={(e) => {
          setSearchMovie(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchBar;
