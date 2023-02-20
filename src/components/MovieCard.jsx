export const MovieCard = ({ movieInfo }) => {
  const { title, release_date } = movieInfo;
  // console.log(movieInfo.title);
  const date = release_date.slice(0, 4);
  return (
    <div>
      <p>
        {title}({date})
      </p>
    </div>
  );
};
