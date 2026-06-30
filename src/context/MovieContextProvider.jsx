/* eslint-disable react-refresh/only-export-components */
// Global movie state shared across the app. This context stores the list of movies
// so components can read and update it without prop drilling.
import { createContext, useContext, useState } from "react";

import { moviesData } from "../data/moviesData";

const MoviesContext = createContext(null);

const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState(moviesData);

  return (
    <MoviesContext.Provider value={[ movies, setMovies ]}>
      {children}
    </MoviesContext.Provider>
  );
};

const useMovies = () => {
  return useContext(MoviesContext);
};

export { MoviesProvider, useMovies };
