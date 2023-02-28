import { useState, useEffect } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { useRef } from 'react';
import { GetMovieById } from 'services/Api';
import { MovieCard } from '../components/MovieCard';
import { BackLink } from 'components/BackLink';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  // console.log(movieId);
  const location = useLocation();
  const ref = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    if (!movieId) {
      return;
    }
    GetMovieById(movieId).then(response => setMovie(response));
  }, [movieId]);

  // console.log(movie);

  return (
<main> <BackLink to={ref.current}>Go back</BackLink>
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
    </main>
    
  )
};
export default MovieDetails;
