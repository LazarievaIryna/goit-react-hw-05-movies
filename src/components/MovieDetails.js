import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { getMovieById } from 'services/Api';

export const MovieDetails = ({ movieId }) => {
  //   const { movieId } = useParams();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieById(movieId).then(movie => setMovie(movie));
  }, [movieId]);
  console.log(movieId);
  const { title } = movie;
  return (
    <div>
      <h1>{title}</h1>
      <Outlet />
    </div>
  );
};
