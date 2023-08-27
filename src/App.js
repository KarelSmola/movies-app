import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import MoviesList from "./components/MoviesList";

const KEY = "668f504b";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError("");
        const response = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${searchMovie}`,
          { signal: controller.signal }
        );

        if (!response.ok)
          throw new Error("Something went wrong with fetching.");

        const data = await response.json();
        if (data.Response === "False") throw new Error("No movies found");

        const transformedMovies = data.Search.map((movie) => {
          return {
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            poster: movie.Poster,
          };
        });

        setMovies(transformedMovies);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (searchMovie < 3) {
      setMovies([]);
      setError("");
      return;
    }

    fetchData();

    return () => {
      controller.abort();
    };
  }, [searchMovie]);

  return (
    <div>
      <SearchBar searchMovie={searchMovie} setSearchMovie={setSearchMovie} />
      {isLoading && <Loader loadingMessage={"Loading Movies..."} />}
      {!isLoading && !error && <MoviesList movies={movies} />}
      {error && <ErrorMessage message={error} />}
    </div>
  );
};

export default App;
