import styled from 'styled-components';
import { Link } from 'react-router-dom';

 export const Wrapper=styled.ul`
 display:grid;
 grid-template-columns: repeat(5, 1fr);
 grid-template-rows: repeat(3, 1fr);
 padding-left: 0;
 gap: 10px;
 list-style: none;

 
`
export const Item=styled.li`
 border: 1px solid black;
 border-radius: 4px;
   `

export const Img=styled.img`
display:block;
height: auto`

export const Title=styled.h2`
font-size: 16px;
`
export const StyledLink=styled(Link)`
text-decoration: none;
`