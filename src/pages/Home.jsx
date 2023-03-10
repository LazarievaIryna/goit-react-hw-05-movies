import { MoviesList } from 'components/MoviesList';
import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'services/Api';
import { Wrapper, Title } from './Home.styled';

const Home = () => {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(setTrends);
  }, []);

  return (
    <Wrapper>
      <Title>Trending today</Title>
      <MoviesList movies={trends} />
    </Wrapper>
  );
};
export default Home;
