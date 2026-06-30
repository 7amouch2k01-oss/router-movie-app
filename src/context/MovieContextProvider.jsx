/* eslint-disable react-refresh/only-export-components */
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
