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
          getMovieCredits(movieId).then(response => setCast(response)).then(error=> console.log(error));
        }, [movieId]);
        if (!cast) {
            return;
          }
    console.log(cast)
    const imgUrl='https://image.tmdb.org/t/p/w500/'
    return <div>
        {cast.length !== 0? (cast.map(({id, profile_path,character, name})=>(<ul key={id}>
<li>
<Img src={profile_path? `${imgUrl}${profile_path}`: noImage} alt={name} />
    <p>{name? name: 'No information'}</p>
    <p>Character: {character? character: 'No information'}</p>
</li>
        </ul>))): 'No information'}
    </div>
}