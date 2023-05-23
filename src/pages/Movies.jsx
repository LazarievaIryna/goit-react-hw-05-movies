
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import { useSearchParams } from "react-router-dom";
import { getMovieByQuery } from 'services/Api';
import {Wrapper} from './Movies.styled'
import { ListMovies } from 'components/ListMovies';
import { SearchBox } from 'components/SearchBox';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies]=useState([])
  const [error, setError]=useState(false)
  
  const movieName=searchParams.get('query')

 
  useEffect(()=>{
    if(!movieName){return}
    getMovieByQuery(movieName).then(response=>{
      if(!response.length){
        setError(true)
        return(console.log(error))
      }
      setError(false)
      setMovies(response)
    }
      
      
    )
  },[movieName, error])
  

 const handleSearch=query=>{
  if(!query){
    alert('Empty query')
    return
  }
  setSearchParams({query})
 }


 

  return (
    <Wrapper>
      
      <SearchBox onSubmit={handleSearch}/>
      {error && <p>There is no movies with this request. Please, try again</p>}
      <ListMovies movies={movies}/>
      <Outlet />
    </Wrapper>
  );
};
export default Movies;
Movies.propTypes={
  onSubmit: PropTypes.func,
  movies:PropTypes.array,
}