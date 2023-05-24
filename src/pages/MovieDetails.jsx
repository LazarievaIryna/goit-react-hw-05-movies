import { useState, useEffect, Suspense } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import { GetMovieById } from 'services/Api';
import { MovieCard } from '../components/MovieCard/MovieCard';
import { BackLink } from '../components/BackLink/BackLink';
import {List, Item,StyledLink, Text, Wrapper, Title, Container} from './MovieDetails.styled'

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const[error, setError]=useState(null)
  const { movieId } = useParams();
  
  const location = useLocation();
  
  const backLinkHref = location.state?.from ?? "/";

  

  useEffect(()=>{
if (!movieId){return}
const onRequestHandler=async()=>{
  try{
    const response= await GetMovieById(movieId)
  setMovie(response)
  }
  catch (error){
  console.log(error.message)
  setError(error)
  }
}
onRequestHandler()

  },[movieId])
 

  return (
<main> 
  <div>
  <div><BackLink to={backLinkHref}>Go back</BackLink></div>
  
    <Container>{movie && <MovieCard movieInfo={movie} />}
   
    <Wrapper>
      <Title>Additional information:</Title>
      <List>
        <Item> <StyledLink to="cast" state={{ from: backLinkHref }}><Text> Cast</Text></StyledLink></Item>
        <Item> <StyledLink to="reviews" state={{ from: backLinkHref }}><Text>Reviews</Text></StyledLink></Item>
      </List>
    </Wrapper>
    <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </Container>
    {error && (
      <p>Something is wrong</p>
    )}
    </div>
    </main>
    
  )
};
export default MovieDetails;
MovieDetails.propTypes={
  movieInfo:PropTypes.array
}
