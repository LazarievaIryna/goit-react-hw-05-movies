import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getMovieCredits } from "services/Api"
import {Img, List, Title, NameTitle, ErrorText} from './Cast.styled'
import noImage from '../img/noImage.png'

 const Cast=()=>{
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
    
    const imgUrl='https://image.tmdb.org/t/p/w500/'
    return (<>
        {cast.length !== 0? (cast.map(({id, profile_path,character, name})=>(<List key={id}>
<li>
<Img src={profile_path? `${imgUrl}${profile_path}`: noImage} alt={name} />
    <NameTitle>{name? name: 'No information'}</NameTitle>
    <p><Title> Character:</Title> {character? character: <span>'No information'</span>}</p>
</li>
        </List>))): <ErrorText>No information
            </ErrorText>}
    </>)
}
export default Cast;