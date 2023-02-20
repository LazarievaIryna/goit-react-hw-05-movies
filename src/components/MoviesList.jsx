import { Link } from 'react-router-dom';

export const MoviesList = ({ movies }) => {
  console.log(movies);
  return (
    <div>
      {movies.length > 0 &&
        movies.map(movie => (
          <div key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <p>{movie.title}</p>
            </Link>
          </div>
        ))}
    </div>
  );
};
