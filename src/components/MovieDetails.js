import { useState, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { getMovieById } from 'services/Api';

export const MovieDetails = () => {
  const { movieId } = useParams();
  console.log(movieId);

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchMovie(movieId) {
      try {
        const data = getMovieById(movieId);
        setMovie(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovie(movieId);
  }, [movieId]);

  console.log(movie);
  // const { title } = movie;
  return (
    <div>
      <h1>title</h1>
      <Outlet />
    </div>
  );
};
