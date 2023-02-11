import { Link } from 'react-router-dom';

export const MoviesList = ({ movies }) => {
  return (
    <div>
      <ul>
        {movies.length > 0 &&
          movies.map(movie => {
            return (
              <li key={movie.id}>
                <Link to={`{/movies/${movie.id}`} />
                {movie.title}
              </li>
            );
          })}
      </ul>
    </div>
  );
};
