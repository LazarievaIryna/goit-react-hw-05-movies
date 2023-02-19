import { Route, Routes } from 'react-router-dom';
// import { lazy } from 'react';
import { Container, Header, Link } from './App.styled';
import Home from 'pages/Home';
import MovieDetails from './MovieDetails';
import { Movies } from 'pages/Movies';

// const MovieDetails = lazy(() => import('../components/MovieDetails'));

export const App = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />} />
      </Routes>
    </Container>
  );
};
