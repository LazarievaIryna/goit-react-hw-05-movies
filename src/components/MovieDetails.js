import { useState, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { GetMovieById } from 'services/Api';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  // console.log(movieId);

  //

  // console.log(movie);
  // const { title } = movie;

  return (
    <div>
      <h1>
        Title
        {movie.title}
        <span>{movie.release_date}</span>
      </h1>
      <p>
        User Score: <span>{Math.round(movie.vote_average * 10)} &#37;</span>
      </p>
      <Outlet />
    </div>
  );
};
export default MovieDetails;
