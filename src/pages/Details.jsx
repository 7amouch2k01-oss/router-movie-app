// Movie details page. It reads the route parameter, finds the matching movie,
// and displays its description and trailer in a dedicated view.
import { useNavigate, useParams } from "react-router-dom";
// import { moviesData } from "../data/moviesData.js";

import { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useMovies } from "../context/MovieContextProvider.jsx";

const Details = () => {
  const params = useParams();
  const [movies, setMovies]= useMovies()
  const [movie, setMovie] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    //recherche du movie avec un id === params.id
    const movieDis = () => {
      setMovie(movies.find((mv) => mv.id === +params.id));
    };
    movieDis();
  }, [params.id]);
  console.log(movie);
  return (
    <div style={{ color: "white" }}>
      <h1>{movie.title}</h1>
      <Row>
        <Col>
          <p>{movie.description}</p>
          <Button onClick={() => navigate(-1)}>Back</Button>
        </Col>
        <Col>
          <iframe src={movie.trailer} />
        </Col>
      </Row>
    </div>
  );
};

export default Details;
