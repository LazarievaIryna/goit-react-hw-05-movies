import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {getMovieReviews} from '../services/Api'
import {List, Name, Text} from './Reviews.styled'
export const Reviews=()=>{
    const [reviews, setReviews]=useState(null)
    const {movieId}=useParams()
    useEffect(()=>{
        if (!movieId) {
            return;
          }
          getMovieReviews(movieId).then(response => setReviews(response));
        }, [movieId]);
        if (!reviews) {
            return;
          }
    return <div>
        {reviews.length !== 0? (reviews.map(({id,author,content})=>(<List key={id}>
            <li>
                <Name>{author? author: 'No information'}</Name>
                <Text>{content? content: 'No information'}</Text>
            </li>
        </List>))) : 'No information'}
    </div>
}