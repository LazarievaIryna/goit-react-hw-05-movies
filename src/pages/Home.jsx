import { MoviesList } from 'components/MoviesList';
import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'services/Api';

const Home = () => {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(setTrends);
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <MoviesList movies={trends} />
    </main>
  );
};
export default Home;
