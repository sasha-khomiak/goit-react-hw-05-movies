// import { NavLink } from 'react-router-dom';
import {
  MovieCardWrap,
  Img,
  MovieTitle,
  Title,
  StyledNavLink,
  Extra,
} from './MovieCard.styled';

const MovieCard = ({ movieInfo }) => {
  console.log('movieInfo', movieInfo);
  const { vote_average } = movieInfo;
  const score = Math.round(vote_average * 10);

  let genres = movieInfo.genres.map(genre => genre.name).join(', ');

  return (
    <MovieCardWrap>
      <div>
        <Img
          src={`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`}
          alt="preview"
        />
      </div>

      <div>
        <MovieTitle>{movieInfo.title}</MovieTitle>
        <p>User score: {score} </p>
      </div>

      <div>
        <Title>Overview </Title>
        <div>{movieInfo.overview}</div>
        <Title>Genres </Title>
        <p>{genres} </p>
      </div>

      <Extra>
        <StyledNavLink to="">Cast </StyledNavLink>
        <StyledNavLink to="">Reviewes </StyledNavLink>
      </Extra>
    </MovieCardWrap>
  );
};

export default MovieCard;
