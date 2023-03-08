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
// export const Item=styled.li`
//  border: 1px solid black;
//  border-radius: 4px;
//    `

export const Img=styled.img`
display:block;
height: 300px;
width: 100%`

export const Title=styled.h2`
font-size: 16px;
margin: 0;
`
export const StyledLink=styled(Link)`
text-decoration: none;
`
export const Card=styled.div`
height: 350px;
border: 1px solid gray;
 border-radius: 4px;
 &:hover{
  box-shadow: 1px 4px 6px 0 rgba(0, 0, 0, 0.16), 0 4px 4px 0 rgba(0, 0, 0, 0.06),
    0 1px 1px 0 rgba(0, 0, 0, 0.12);
 }
`
export const TitleBox=styled.div`
/* padding: 20px 24px; */
margin: 0;
display: grid;
    justify-items: center;
    padding: 5px;
`