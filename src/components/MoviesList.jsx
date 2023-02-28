import { Link, useLocation } from 'react-router-dom';

export const MoviesList = ({ movies }) => {
  // console.log(movies);
  const location = useLocation();
  return (
    <div>
      {movies.length > 0 &&
        movies.map(movie => (
          <div key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              <p>{movie.title}</p>
            </Link>
          </div>
        ))}
    </div>
  );
};
