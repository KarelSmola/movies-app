import { useState, useEffect } from "react";

const KEY = "668f504b";

export const useMovies = (searchMovie) => {
  const [movies, setMovies] = useState([]);
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

    if (!searchMovie) {
      setMovies([]);
      setError("");
      return;
    }

    fetchData();

    return () => {
      controller.abort();
    };
  }, [searchMovie]);

  return { isLoading, movies, error };
};
