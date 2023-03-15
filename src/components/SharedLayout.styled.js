import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  /* max-width: 960px; */
  margin: 0 auto;
  /* padding: 0 16px 5px 16px; */
  /* background-color: #cfb8b8; */
  /* padding: 5px; */
  /* background-color: aqua; */
  height: 100%;
  /* padding: 10px; */
`;

export const Header = styled.header`
/* position: fixed; */
  display: flex;
  align-items: center;
  justify-content: center;
  /* justify-content: space-between; */
  background-color: #b32740;
  gap: 12px;
  padding: 8px 0;
  /* background-color: aqua; */
  /* margin-bottom: 16px; */
  border-bottom: 1px solid black;

  > nav {
    display: flex;
  }
`;

export const Logo = styled.p`
  font-weight: 700;
  margin: 0;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  margin-right: 10px;

  &.active {
    color: white;
    background-color: #d37690;
  }
`;
export const Nav=styled.nav`
padding-left:5px;`