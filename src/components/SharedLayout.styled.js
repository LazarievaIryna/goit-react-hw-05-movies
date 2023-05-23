import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  
  margin: 0 auto;
  
  height: 100%;
  
`;

export const Header = styled.header`

  display: flex;
  align-items: center;
  justify-content: center;
 
  background-color: #b32740;
  gap: 12px;
  padding: 8px 0;
 
 
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