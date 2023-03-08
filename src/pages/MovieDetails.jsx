import { useState, useEffect } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
// import { useRef } from 'react';
import { GetMovieById } from 'services/Api';
import { MovieCard } from '../components/MovieCard';
import { BackLink } from 'components/BackLink';
import {List, Item,StyledLink} from './MovieDetails.styled'

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const[error, setError]=useState(null)
  const { movieId } = useParams();
  
  const location = useLocation();
  
  const backLinkHref = location.state?.from ?? "/";

  // useEffect(() => {
  //   if (!movieId) {
  //     return;
  //   }
  //   GetMovieById(movieId).then(response => setMovie(response));
  // }, [movieId]);

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
  <BackLink to={backLinkHref}>Go back</BackLink>
    <div>{movie && <MovieCard movieInfo={movie} />}
   
    <div>
      <p>Additional information</p>
      <List>
        <Item> <StyledLink to="cast" state={{ from: backLinkHref }}>Cast</StyledLink></Item>
        <Item> <StyledLink to="reviews" state={{ from: backLinkHref }}>Reviews</StyledLink></Item>
      </List>
    </div>
    <Outlet/>
    </div>
    {error && (
      <p>Something is wrong</p>
    )}
    </main>
    
  )
};
export default MovieDetails;
