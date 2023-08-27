import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";

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

        setMovies(data.Search);
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
      {isLoading && <p>Loading movies...</p>}
      {!isLoading && !error && (
        <ul>
          {movies.map((movie) => (
            <li key={movie.imdbID}>{movie.Title}</li>
          ))}
        </ul>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default App;
