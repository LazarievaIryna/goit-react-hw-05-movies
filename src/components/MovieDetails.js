import { useState, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { getMovieById } from 'services/Api';

export const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  // console.log(movieId);

  useEffect(() => {
    async function fetchMovie(movieId) {
      try {
        const response = await getMovieById(movieId);
        setMovie(response);
        // console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovie(movieId);
    // getMovieById(movieId)
    //   .then(movie => setMovie(movie))
    //   .catch(error => console.log('Error:', error));
  }, [movieId]);

  console.log(movie.release_date);
  const { title, vote_average, release_date } = movie;
  // const str = movie.release_date;
  // const date = str.slice(0, 4);
  // console.log(release_date);

  return (
    <div>
      <h1>
        {title}
        <span>{release_date}</span>
      </h1>
      <p>
        User Score: <span>{Math.round(vote_average * 10)} &#37;</span>
      </p>
      <Outlet />
    </div>
  );
};
