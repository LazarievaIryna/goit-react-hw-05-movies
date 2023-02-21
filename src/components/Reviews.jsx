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
        {reviews.map(({id,author,content})=>(<ul key={id}>
            <li>
                <p>{author}</p>
                <p>{content}</p>
            </li>
        </ul>))}
    </div>
}