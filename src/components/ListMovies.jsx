import {  useLocation } from 'react-router-dom';
import {StyledLink, Title, Card, TitleBox, Img, Wrapper} from './ListMovies.styled'
import noImage from '../img/noImage.png'
export const ListMovies=({movies})=>{
  const location = useLocation();
  const imgUrl = 'https://image.tmdb.org/t/p/w500';
    return (
      <>
      <Wrapper>
        {movies.length > 0 && 
        (movies.map(movie => (
          <div key={movie.id}>
            <StyledLink to={`${movie.id}` } state={{ from: location }}>
              
              <Card>
            <Img src={movie.poster_path? `${imgUrl}${movie.poster_path}`: noImage} alt={movie.title} />
            <TitleBox>
              <Title>{movie.title}</Title>
              </TitleBox>
              </Card>
            </StyledLink>
          </div>
        )))}
    </Wrapper>
    </>
    )
}