import MovieCard from "../movieCard/MovieCard";
import "./movieList.css";

const MovieList = ({ movies, searchTitle, searchRate }) => {
  // console.log(movies);
  return (
    <div className="movies">
      {movies
        .filter(
          (movie) =>
            movie.title.toUpperCase().includes(searchTitle.toUpperCase()) &&
            movie.rate >= searchRate,
        )
        .map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
    </div>
  );
};

export default MovieList;
