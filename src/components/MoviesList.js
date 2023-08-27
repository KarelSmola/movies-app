import React from "react";
import Movie from "./Movie";

import classes from "./MoviesList.module.css";

const MoviesList = ({ movies }) => {
  return (
    <ul className={classes["movies-list"]}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          poster={movie.poster}
          title={movie.title}
          year={movie.year}
        />
      ))}
    </ul>
  );
};

export default MoviesList;
