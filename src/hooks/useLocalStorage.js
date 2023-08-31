import { useEffect } from "react";

export const useLocalStorage = (favouriteMovies) => {
  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favouriteMovies));
  }, [favouriteMovies]);
};
