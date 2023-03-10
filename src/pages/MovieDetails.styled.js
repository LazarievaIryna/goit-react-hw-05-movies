import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container=styled.div`
padding-bottom:10px;`

export const List=styled.ul`
list-style: none;
display: flex;
align-items: center;
margin: 0;

    justify-content: space-evenly;
    /* padding-bottom: 25px; */
`
export const Item=styled.li`
text-decoration: none;
margin-right: 15px;`

export const StyledLink=styled(Link)`
text-decoration: none;
&:hover{
    cursor: pointer;
    
}
`
export const Text=styled.span`
color: black;
&:hover{
    color: #650808;
}`

export const Wrapper=styled.div`
border-top: solid 1px black;
border-bottom: solid 1px black;
padding: 10px;
height: 50px;
display:flex;
align-items: center;`

export const Title=styled.p`
font-weight: bold`