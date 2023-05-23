import { HiArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
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

export const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <HiArrowLeft size="20" />
      {children}
    </StyledLink>
  );
};
