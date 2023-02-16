import { useState, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { getMovieById } from 'services/Api';

export const MovieDetails = () => {
  const { movieId } = useParams();
  console.log(movieId);

  const [movie, setMovie] = useState({});

  useEffect(() => {
    // async function fetchMovie(movieId) {
    //   try {
    //     const data = getMovieById(movieId);
    //     setMovie(data);
    //     console.log(data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
    // fetchMovie(movieId);
    getMovieById(movieId)
      .then(movie => setMovie(movie))
      .catch(error => console.log('Error:', error));
  }, [movieId]);

  console.log(typeof movie.release_date);
  const { title, vote_average, release_date } = movie;
  return (
    <div>
      <h1>
        {title} <span>{release_date.slice(0, 4)}</span>{' '}
      </h1>
      <p>
        User Score: <span>{Math.round(vote_average * 10)} &#37;</span>
      </p>
      <Outlet />
    </div>
  );
};
