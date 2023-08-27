import React from "react";

import classes from "./SearchBar.module.css";

const SearchBar = ({ searchMovie, setSearchMovie }) => {
  return (
    <section className={classes["search-bar"]}>
      <label className={classes["search-label"]}>Search movie</label>
      <input
        className={classes["search-input"]}
        type="search"
        value={searchMovie}
        onChange={(e) => {
          setSearchMovie(e.target.value);
        }}
      />
    </section>
  );
};

export default SearchBar;
