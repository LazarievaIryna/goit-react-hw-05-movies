import { Link, useLocation } from 'react-router-dom';
export const ListMovies=({movies})=>{
  const location = useLocation();
    return <div>
        {movies.length !== 0? 
        (movies.map(movie => (
          <div key={movie.id}>
            <Link to={`${movie.id}` } state={{ from: location }}>
              <p>{movie.title}</p>
            </Link>
          </div>
        ))): 'Сan not find this movie'}
    </div>
}