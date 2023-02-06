import { Route, Routes } from 'react-router-dom';
import { Container, Header, Link } from './App.styled';
import { Home } from 'pages/Home';

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
      </Routes>
    </Container>
  );
};
