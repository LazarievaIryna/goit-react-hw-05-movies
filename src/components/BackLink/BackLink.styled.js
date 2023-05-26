import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 5px;
  
  color: black;
  text-decoration: none;
  font-weight: 400;
  font-size: 14px;
  
  margin-top: 4px;
  margin-left: 10px;
  border-radius: 4px;
  
  background-color: #d37690;

  :hover {
    color: white;
  }
`;