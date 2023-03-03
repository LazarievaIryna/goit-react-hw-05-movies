import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {getMovieReviews} from '../services/Api'
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
        {reviews.length !== 0? (reviews.map(({id,author,content})=>(<ul key={id}>
            <li>
                <p>{author? author: 'No information'}</p>
                <p>{content? content: 'No information'}</p>
            </li>
        </ul>))) : 'No information'}
    </div>
}