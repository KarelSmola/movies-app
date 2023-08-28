import React from "react";

import classes from "./Movie.module.css";

const Movie = ({ id, title, year, poster, onSelectedId }) => {
  return (
    <li
      className={classes.movie}
      onClick={() => {
        onSelectedId(id);
      }}
    >
      <figure className={classes["poster-box"]}>
        <img className={classes["movie-poster"]} src={poster} alt={title} />
      </figure>
      <div className={classes["movie-info"]}>
        <h1 className={classes["movie-title"]}>{title}</h1>
        <p className={classes["movie-year"]}>{year}</p>
      </div>
    </li>
  );
};

export default Movie;
