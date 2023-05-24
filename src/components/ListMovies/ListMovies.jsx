import {  useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {StyledLink, Title, Card, TitleBox, Img, Wrapper} from './ListMovies.styled'
import noImage from '../../img/noImage.png'
export const ListMovies=({movies})=>{
  const location = useLocation();
 
  const imgUrl = 'https://image.tmdb.org/t/p/w500';
    return (
      <>
      <Wrapper>
        {movies.length > 0 && 
        (movies.map(({id, poster_path, title}) => (
          <div key={id}>
            <StyledLink to={`${id}` } state={{ from: location }}>
              
              <Card>
            <Img src={poster_path? `${imgUrl}${poster_path}`: noImage} alt={title} />
            <TitleBox>
              <Title>{title}</Title>
              </TitleBox>
              </Card>
            </StyledLink>
          </div>
        )))}
    </Wrapper>
    </>
    )
}
ListMovies.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
      title: PropTypes.string.isRequired,
      
    }).isRequired
  ).isRequired,
};