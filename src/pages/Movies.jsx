import { ListMovies } from 'components/ListMovies';
import { SearchBox } from 'components/SearchBox';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useSearchParams } from "react-router-dom";
import { getMovieByQuery } from 'services/Api';

export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies]=useState([])
  
  const movieName=searchParams.get('query')
  // console.log(movieName)

  useEffect(()=>{
    
    if(!movieName){
      
      return}
    getMovieByQuery(movieName).then(res=>setMovies(res))
  },[movieName])
  

 const handleSearch=query=>{
  if(!query){
    alert('Empty query')
    return
  }
  setSearchParams({query})
 }


 
console.log(movies)
  return (
    <div>
      
      <SearchBox onSubmit={handleSearch}/>
      <ListMovies movies={movies}/>
      <Outlet />
    </div>
  );
};
