import{Wrapper} from './MovieCard.styled'

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
      <img src={`${imgUrl}${poster_path}`} alt={title} />
      <h2>
        {title}&nbsp;({date})
      </h2>
      <p>User score: {userScore}%</p>
      <p>{overview}</p>
      <p>Genres</p>
      <p>{genreList}</p>
    </Wrapper>
  );
};
