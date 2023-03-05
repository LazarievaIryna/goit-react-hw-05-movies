import {  useLocation } from 'react-router-dom';
import noImage from '../img/noImage.png'
import {Wrapper, Item, Img, Title, StyledLink}from'./MoviesList.styled'

export const MoviesList = ({ movies }) => {
  // console.log(movies);
  const location = useLocation();
  const imgUrl = 'https://image.tmdb.org/t/p/w500';
  return (
    <Wrapper>
      {movies.length > 0 &&
        movies.map(movie => (
          <Item key={movie.id}>
            <StyledLink to={`/movies/${movie.id}`} state={{ from: location }} >
              <div>
            <Img src={movie.poster_path? `${imgUrl}${movie.poster_path}`: noImage} alt={movie.title} />
              <Title>{movie.title}</Title>
              </div>
            </StyledLink>
          </Item>
        ))}
    </Wrapper>
  );
};
