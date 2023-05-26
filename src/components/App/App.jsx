import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { SharedLayout } from '../SharedLayout/SharedLayout';
import {NotFound}  from '../../pages/NotFound/NotFound';

const MovieDetails = lazy(() => import('../../pages/MovieDetails/MovieDetails'));
const Home=lazy(()=>import('../../pages/Home/Home'))
const Movies=lazy(()=>import('../../pages/Movies/Movies'))
const Cast=lazy(()=>import('../Cast/Cast'))
const Reviews=lazy(()=>import('../Reviews/Reviews'))


export const App = () => {
  return (
    
      <>
      <Routes>
        <Route path="/" element={<SharedLayout/>} >
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} >
          <Route path="/movies/:movieId/cast" element={<Cast/>} />
          <Route path="/movies/:movieId/reviews" element={<Reviews/>} />
        </Route>
        <Route path="*" element={<NotFound/>} />

        </Route>
      </Routes>
      </>
    
  );
};
