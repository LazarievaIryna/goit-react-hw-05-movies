import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'services/Api';

export const Home = () => {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    // const response = getTrendingMovies();
    // setTrends(response);
    getTrendingMovies().then(movies => setTrends(movies.results));
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <div>
        <ul>
          {trends.length > 0 &&
            trends.map(({ id, title }) => {
              return <li key={id}>{title}</li>;
            })}
        </ul>
      </div>
    </main>
  );
};
