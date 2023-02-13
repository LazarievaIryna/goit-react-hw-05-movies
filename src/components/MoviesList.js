import { Link } from 'react-router-dom';

export const MoviesList = ({ movies }) => {
  console.log(movies);
  return (
    <div>
      <ul>
        {movies.length > 0 &&
          movies.map(movie => {
            // console.log(movie.id);
            return (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`} />

                <h2>{movie.title}</h2>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
