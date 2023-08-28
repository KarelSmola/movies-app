import React from "react";
import FavouriteMovie from "./FavouriteMovie";

import classes from "./FavouriteMoviesList.module.css";

const FavouriteMoviesList = ({ favouriteMovies, onRemoveFromFavourites }) => {
  return (
    <section>
      <h1 className={classes.title}>Favourite movies</h1>
      <ul>
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
