import { ListMovies } from 'components/ListMovies';
import { SearchBox } from 'components/SearchBox';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useSearchParams } from "react-router-dom";
import { getMovieByQuery } from 'services/Api';

export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies]=useState([])
  // const [query, setQuery]=useState('')

  useEffect(()=>{
    const query = searchParams.get("query") ?? "";
    if(!query){return}
    getMovieByQuery(query).then(res=>setMovies(res))
  },[searchParams])

  // const newQuery = e => {
  //   setQuery(e.target.value);
  //   console.log(e)
  // };
  


  const handleSubmit = query => {
    
    setSearchParams(query !== '' ? { query } : {});
  };
console.log(movies)
  return (
    <div>
      
      <SearchBox onSubmit={handleSubmit}/>
      <ListMovies movies={movies}/>
      <Outlet />
    </div>
  );
};
