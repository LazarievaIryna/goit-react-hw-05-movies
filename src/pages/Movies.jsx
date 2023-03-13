import { ListMovies } from 'components/ListMovies';
import { SearchBox } from 'components/SearchBox';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useSearchParams } from "react-router-dom";
import { getMovieByQuery } from 'services/Api';
import {Wrapper} from './Movies.styled'

export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies]=useState([])
  const [error, setError]=useState(false)
  
  const movieName=searchParams.get('query')
  // console.log(movieName)

  // useEffect(()=>{
    
  //   if(!movieName){
      
  //     return}
  //   getMovieByQuery(movieName).then(res=>setMovies(res))
  // },[movieName])
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


 
console.log(movies)
  return (
    <Wrapper>
      
      <SearchBox onSubmit={handleSearch}/>
      {error && <p>There is no movies with this request. Please, try again</p>}
      <ListMovies movies={movies}/>
      <Outlet />
    </Wrapper>
  );
};
