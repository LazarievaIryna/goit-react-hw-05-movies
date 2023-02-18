import { useState, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { GetMovieById } from 'services/Api';

export default function MovieDetails() {
  const [movie, setMovie] = useState('');
  const { movieId } = useParams('');
  // console.log(movieId);

  //
  useEffect(() => {
    if (movieId === '') {
      return;
    }
    GetMovieById(movieId)
      .then(response => setMovie(response))
      .catch(error => console.log(error));
  }, [movieId]);

  console.log(movie.vote_average);
  const { title, vote_average, release_date } = movie;

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
}
