import {  useLocation } from 'react-router-dom';
import noImage from '../img/noImage.png'
import {Wrapper, Img, Title, StyledLink, Card,TitleBox }from'./MoviesList.styled'

export const MoviesList = ({ movies }) => {
  // console.log(movies);
  const location = useLocation();
  const imgUrl = 'https://image.tmdb.org/t/p/w500';
  return (
    <Wrapper>
      {movies.length > 0 &&
        movies.map(movie => (
          <li key={movie.id}>
            <StyledLink to={`/movies/${movie.id}`} state={{ from: location }} >
              <Card>
            <Img src={movie.poster_path? `${imgUrl}${movie.poster_path}`: noImage} alt={movie.title} />
            <TitleBox>
              <Title>{movie.title}</Title>
              </TitleBox>
              </Card>
            </StyledLink>
          </li>
        ))}
    </Wrapper>
  );
};
