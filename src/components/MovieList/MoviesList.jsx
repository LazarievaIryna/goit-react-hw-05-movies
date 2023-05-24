import {  useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import noImage from '../../img/noImage.png'
import {Wrapper, Img, Title, StyledLink, Card,TitleBox }from'./MoviesList.styled'

export const MoviesList = ({ movies }) => {

  const location = useLocation();
  const imgUrl = 'https://image.tmdb.org/t/p/w500';
  return (
    <Wrapper>
      {movies.length > 0 &&
        movies.map(({id, poster_path, title}) => (
          <li key={id}>
            <StyledLink to={`/movies/${id}`} state={{ from: location }} >
              <Card>
            <Img src={poster_path? `${imgUrl}${poster_path}`: noImage} alt={title} />
            <TitleBox>
              <Title>{title}</Title>
              </TitleBox>
              </Card>
            </StyledLink>
          </li>
        ))}
    </Wrapper>
  );
};
MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
      title: PropTypes.string.isRequired,
      
    }).isRequired
  ).isRequired,
};
