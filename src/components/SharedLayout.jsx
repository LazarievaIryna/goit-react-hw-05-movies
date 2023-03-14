import { Outlet } from "react-router-dom";
import { Container, Header, Link, Nav } from "./SharedLayout.styled";

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        
        <Nav>
        <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </Nav>
      </Header>
      <Outlet />
    </Container>
  );
};
