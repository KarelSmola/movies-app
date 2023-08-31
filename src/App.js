import React, { useState } from "react";
import { useMovies } from "./hooks/useMovies";
import SearchBar from "./components/SearchBar";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import MoviesList from "./components/MoviesList";
import FavouriteMoviesList from "./components/FavouriteMoviesList";
import MovieDetail from "./components/MovieDetail";

import MainWrapper from "./components/UI/MainWrapper";
import { useLocalStorage } from "./hooks/useLocalStorage";

const App = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [searchMovie, setSearchMovie] = useState("");
  const [favouriteMovies, setFavouriteMovies] = useState(() => {
    const storedValue = localStorage.getItem("favourites");
    return JSON.parse(storedValue);
  });
  const { movies, isLoading, error } = useMovies(searchMovie);
  useLocalStorage(favouriteMovies);

  const selectedMovieId = (id) => {
    setSelectedId(id);
  };

  const addToFavourite = (movie) => {
    setFavouriteMovies((prevMovie) => [...prevMovie, movie]);
    setSelectedId(null);
  };

  const closeDetail = () => {
    setSelectedId(null);
  };

  const favMoviesAmount = favouriteMovies.length;

  const favMoviesTotalTime = favouriteMovies
    .map((movie) => Number(movie.runtime.split(" ")[0]))
    .reduce((acc, currRunTime) => acc + currRunTime, 0)
    .toFixed(0);

  const favMoviesAverageRating = favouriteMovies.length
    ? (
        favouriteMovies.reduce(
          (acc, currMovie) => acc + Number(currMovie.rating),
          0
        ) / favMoviesAmount
      ).toFixed(1)
    : 0;

  const removeFromFavourites = (id) => {
    setFavouriteMovies((prevFavourites) =>
      prevFavourites.filter((movie) => movie.id !== id)
    );
  };

  const movieAdded = favouriteMovies
    .map((movie) => movie.id)
    .includes(selectedId);

  return (
    <MainWrapper>
      <SearchBar searchMovie={searchMovie} onSearchMovie={setSearchMovie} />

      {isLoading && <Loader loadingMessage={"Loading Movies..."} />}
      {!isLoading && !error && (
        <MoviesList movies={movies} onSelectedId={selectedMovieId} />
      )}
      {error && <ErrorMessage message={error} />}

      {selectedId ? (
        <MovieDetail
          movieId={selectedId}
          onAddToFavourite={addToFavourite}
          movieAdded={movieAdded}
          onCloseDetail={closeDetail}
        />
      ) : (
        <FavouriteMoviesList
          favouriteMovies={favouriteMovies}
          onRemoveFromFavourites={removeFromFavourites}
          moviesAmount={favMoviesAmount}
          totalTime={favMoviesTotalTime}
          averageRating={favMoviesAverageRating}
        />
      )}
    </MainWrapper>
  );
};

export default App;
