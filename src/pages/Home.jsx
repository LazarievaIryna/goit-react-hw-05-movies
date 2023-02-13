import { MoviesList } from 'components/MoviesList';
import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'services/Api';

export const Home = () => {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    // const response = getTrendingMovies();
    // setTrends(response);
    getTrendingMovies().then(movies => setTrends(movies.results));
  }, []);
  // console.log(trends);

  return (
    <main>
      <h1>Trending today</h1>
      <MoviesList movies={trends} />
    </main>
  );
};
