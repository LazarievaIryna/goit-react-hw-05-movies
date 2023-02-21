import { useState, useEffect } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import { GetMovieById } from 'services/Api';
import { MovieCard } from './MovieCard';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  // console.log(movieId);

  useEffect(() => {
    if (!movieId) {
      return;
    }
    GetMovieById(movieId).then(response => setMovie(response));
  }, [movieId]);

  // console.log(movie);

  return (
    <div>{movie && <MovieCard movieInfo={movie} />}
    <div>
      <p>Additional information</p>
      <ul>
        <li> <Link to="cast">Cast</Link></li>
        <li> <Link to="reviews">Reviews</Link></li>
      </ul>
    </div>
    <Outlet/>
    </div>
    
  )
};
export default MovieDetails;
