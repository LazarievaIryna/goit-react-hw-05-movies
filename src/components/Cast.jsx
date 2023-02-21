import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getMovieCredits } from "services/Api"
import {Img} from './Cast.styled'
import noImage from '../img/noImage.png'

export const Cast=()=>{
    const [cast, setCast]=useState(null)
    const {movieId}=useParams()
    useEffect(()=>{
        if (!movieId) {
            return;
          }
          getMovieCredits(movieId).then(response => setCast(response));
        }, [movieId]);
        if (!cast) {
            return;
          }
    console.log(cast)
    const imgUrl='https://image.tmdb.org/t/p/w500/'
    return <div>
        {cast.map(({id, profile_path,character, name})=>(<ul key={id}>
<li>
<Img src={profile_path? `${imgUrl}${profile_path}`: noImage} alt={name} />
    <p>{name}</p>
    <p>Character: {character}</p>
</li>
        </ul>))}
    </div>
}