

import{Wrapper, Card, Img, Info, Score, Genres} from './MovieCard.styled'
import noImage from '../img/noImage.png'

export const MovieCard = ({ movieInfo }) => {
  const { title, release_date, vote_average, overview, genres, poster_path } =
    movieInfo;
  // console.log(movieInfo.title);
  const date = release_date.slice(0, 4);
  const userScore = Math.round(vote_average * 10);
  const genreList = genres.map(genre => genre.name).join(', ');
  const imgUrl = 'https://image.tmdb.org/t/p/w500';
  return (
    <Wrapper>
      
      <Img src={poster_path? `${imgUrl}${poster_path}`: noImage } alt={title} />
      <Card>
      <h2>
        {title}&nbsp;({date? date:'No information'})
      </h2>
      <p><Score>User score:</Score> {userScore}%</p>
      <p>{overview}</p>
      <Genres>Genres:</Genres>
      <p>{genres.length !==0 ? genreList : (<Info>'No information'</Info>) }</p>
      </Card>
      
    </Wrapper>
  );
};
