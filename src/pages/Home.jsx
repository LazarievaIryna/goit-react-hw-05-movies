import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'services/Api';

export const Home = () => {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    const response = getTrendingMovies();
    setTrends(response);
  }, []);

  return <h1>Trending today</h1>;
};
