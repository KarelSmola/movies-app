import React from "react";

import classes from "./FavouriteMoviesStat.module.css";

const FavouriteMoviesStat = ({ moviesAmount, totalTime, averageRating }) => {
  return (
    <section className={classes["movies-stats"]}>
      <h1 className={classes.title}>Favourite movies</h1>
      <div className={classes.wrapper}>
        <p className={classes["movies-amount"]}>
          🎬 {moviesAmount} favourite movies
        </p>
        <p className={classes["total-time"]}>⏳ Total time {totalTime} min</p>
        <p className={classes["average-rating"]}>
          ⭐️ Average rating {averageRating}
        </p>
      </div>
    </section>
  );
};

export default FavouriteMoviesStat;
