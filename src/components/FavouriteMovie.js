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
      <p>{title}</p>
      <p>{rating}</p>
      <p>{runtime}</p>
      <button
        onClick={() => {
          onRemoveFromFavourites(id);
        }}
      >
        Remove
      </button>
    </li>
  );
};

export default FavouriteMovie;
