import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getMovieCredits } from "services/Api"
import {Img, List, Title, NameTitle, ErrorText} from './Cast.styled'
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
        {cast.length !== 0? (cast.map(({id, profile_path,character, name})=>(<List key={id}>
<li>
<Img src={profile_path? `${imgUrl}${profile_path}`: noImage} alt={name} />
    <NameTitle>{name? name: 'No information'}</NameTitle>
    <p><Title> Character:</Title> {character? character: <div>'No information'</div>}</p>
</li>
        </List>))): <ErrorText>No information
            </ErrorText>}
    </div>
}