import React from "react";

import classes from "./Movie.module.css";

const Movie = ({ title, year, poster }) => {
  return (
    <li className={classes.movie}>
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
