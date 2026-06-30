// Displays one movie as a Bootstrap card with a poster, rating, and a link to its details page.
import "./movieCard.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Rating from '../filterByRate/FilterByRate'
import { Link } from "react-router-dom";
const MovieCard = ({movie}) => {
  return <div
  className="m-3">
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movie.posterUrl} height={350}/>
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
       
        <hr/>
          <Rating rate={movie.rate} isRate={true}/>
          <Link to={`/movie/${movie.id}`}>
        <Button variant="secondary">Details</Button>
        </Link>
      </Card.Body>
    </Card>
  </div>;
};

export default MovieCard;
