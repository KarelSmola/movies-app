import React from "react";

import classes from "./FavouriteMovie.module.css";

const FavouriteMovie = ({
  id,
  title,
  rating,
  runtime,
  onRemoveFromFavourites,
}) => {
  return (
    <li className={classes["favourite-movie"]}>
      <div className={classes["favourite-movie-info"]}>
        <p className={classes.title}>{title}</p>
        <p className={classes.rating}>⭐️ {rating}</p>
        <p className={classes.runtime}> ⏳{runtime}</p>
      </div>
      <button
        className={classes.remove}
        onClick={() => {
          onRemoveFromFavourites(id);
        }}
      >
        ❌
      </button>
    </li>
  );
};

export default FavouriteMovie;
