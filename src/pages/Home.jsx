import { MoviesList } from 'components/MoviesList';
import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'services/Api';
import { Wrapper } from './Home.styled';

const Home = () => {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(setTrends);
  }, []);

  return (
    <Wrapper>
      <h1>Trending today</h1>
      <MoviesList movies={trends} />
    </Wrapper>
  );
};
export default Home;
