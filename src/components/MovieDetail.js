import React, { useState, useEffect } from "react";

import classes from "./MovieDetail.module.css";

const KEY = "668f504b";

const MovieDetail = ({ movieId, onAddToFavourite }) => {
  const [movieDetail, setMovieDetail] = useState([]);

  // const {id: data.imdbID,
  //   title: data.Title,
  //   poster: data.Poster,
  //   genre: data.Genre,
  //   director: data.Director,
  //   runtime: data.Runtime,
  //   rating: data.imdbRating,
  //   description: data.Plot,}= movieDetail

  const {
    imdbID: id,
    Title: title,
    Poster: poster,
    Genre: genre,
    Director: director,
    Runtime: runtime,
    imdbRating: rating,
    Plot: description,
  } = movieDetail;

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${KEY}&i=${movieId}`
      );
      const data = await response.json();

      setMovieDetail(data);
    };

    fetchMovie();
  }, [movieId]);

  return (
    <div className={classes["movie-detail"]}>
      <div className={classes["title-wrapper"]}>
        <h1 className={classes.title}>{title}</h1>
        <p className={classes.genre}>{genre}</p>
        <p className={classes.director}>{director}</p>
      </div>
      <figure className={classes["img-box"]}>
        <img className={classes.poster} src={poster} alt={title} />
      </figure>
      <div className={classes.wrapper}>
        <p className={classes.rating}>⭐️ {rating}</p>
        <p className={classes.runtime}>⏳ {runtime}</p>
      </div>
      <p className={classes.description}>{description}</p>
      <button
        className={classes.btn}
        onClick={() => {
          onAddToFavourite({ id, title, rating, runtime });
        }}
      >
        Add to favurites
      </button>
    </div>
  );
};

export default MovieDetail;
