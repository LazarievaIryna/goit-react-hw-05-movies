
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { MoviesList } from 'components/MovieList/MoviesList';
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
Home.propTypes={
  trends: PropTypes.array
}

