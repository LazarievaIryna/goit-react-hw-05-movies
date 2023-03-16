import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
// import { Container, Header, Link } from './App.styled';
// import Home from 'pages/Home';
// import MovieDetails from '../pages/MovieDetails';
// import { Movies } from 'pages/Movies';
// import { Cast } from './Cast';
// import { Reviews } from './Reviews';
import { SharedLayout } from './SharedLayout';
import { NotFound } from 'pages/NotFound';

const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Home=lazy(()=>import('../pages/Home'))
const Movies=lazy(()=>import('../pages/Movies'))
const Cast=lazy(()=>import('./Cast'))
const Reviews=lazy(()=>import('./Reviews'))


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
