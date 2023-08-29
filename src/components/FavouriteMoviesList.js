import React from "react";
import FavouriteMovie from "./FavouriteMovie";
import FavouriteMoviesStat from "./FavouriteMoviesStat";

import classes from "./FavouriteMoviesList.module.css";

const FavouriteMoviesList = ({
  favouriteMovies,
  onRemoveFromFavourites,
  moviesAmount,
  totalTime,
  averageRating,
}) => {
  return (
    <section className={classes["favourite-movies"]}>
      <FavouriteMoviesStat
        moviesAmount={moviesAmount}
        totalTime={totalTime}
        averageRating={averageRating}
      />
      <ul className={classes["favourite-movies-list"]}>
        {favouriteMovies.map((movie) => (
          <FavouriteMovie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            rating={movie.rating}
            runtime={movie.runtime}
            onRemoveFromFavourites={onRemoveFromFavourites}
          />
        ))}
      </ul>
    </section>
  );
};

export default FavouriteMoviesList;
