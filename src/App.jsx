import { useState } from "react";
import "./App.css";
import MovieList from "./components/movieList/MovieList";
// import { moviesData } from "./data/moviesData.js";
import AddMovie from "./components/addMovie/AddMovie.jsx";
import FilterByTitle from "./components/filterByTitle/FilterByTitle";
import FilterByRate from "./components/filterByRate/FilterByRate.jsx";
import { useMovies } from "./context/MovieContextProvider.jsx";

function App() {
  const [movies, setMovies ] = useMovies();
  const [searchTitle, setSearchTitle] = useState("");
  const [searchRate, setSearchRate] = useState(1);

  // fonction pour rajouter le nouveua film à ma data
  const addFilm = (newMovie) => {
    setMovies([newMovie, ...movies]); //push moderne
  };

  return (
    <>
      <h1>Movie App</h1>
      <AddMovie addFilm={addFilm} />
      <FilterByTitle
        searchTitle={searchTitle}
        setSearchTitle={setSearchTitle}
      />
      <FilterByRate
        searchRate={searchRate}
        setSearchRate={setSearchRate}
        isRate={false}
      />
      <MovieList
        movies={movies}
        searchTitle={searchTitle}
        searchRate={searchRate}
      />
    </>
  );
}

export default App;
