import React from "react";
import Movie from "./Movie";

import classes from "./MoviesList.module.css";

const MoviesList = ({ movies, onSelectedId }) => {
  return (
    <ul className={classes["movies-list"]}>
      {movies.map((movie) => (
        <Movie
          id={movie.id}
          key={movie.id}
          poster={movie.poster}
          title={movie.title}
          year={movie.year}
          onSelectedId={onSelectedId}
        />
      ))}
    </ul>
  );
};

export default MoviesList;
