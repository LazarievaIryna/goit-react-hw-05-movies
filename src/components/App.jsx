import { Route, Routes } from 'react-router-dom';
// import { lazy } from 'react';
// import { Container, Header, Link } from './App.styled';
import Home from 'pages/Home';
import MovieDetails from '../pages/MovieDetails';
import { Movies } from 'pages/Movies';
import { Cast } from './Cast';
import { Reviews } from './Reviews';
import { SharedLayout } from './SharedLayout';

// const MovieDetails = lazy(() => import('../components/MovieDetails'));

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

        </Route>
      </Routes>
      </>
    
  );
};
