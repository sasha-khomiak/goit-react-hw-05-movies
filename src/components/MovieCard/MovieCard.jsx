import { useLocation } from 'react-router-dom';
import {
  MovieCardWrap,
  Img,
  MovieTitle,
  Title,
  StyledNavLink,
  Extra,
} from './MovieCard.styled';

import { useRef } from 'react';
import NoPosterImage from '../../images/noPoster.jpg';

const MovieCard = ({ movieInfo }) => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
  // console.log('location', location);

  const { vote_average } = movieInfo;
  const score = Math.round(vote_average * 10);

  let genres = movieInfo.genres.map(genre => genre.name).join(', ');

  let posterPath = NoPosterImage;
  if (movieInfo.poster_path) {
    posterPath = `https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`;
  }

  return (
    <MovieCardWrap>
      <div>
        <StyledNavLink to={backLinkLocationRef.current}>Back </StyledNavLink>
      </div>
      <div>
        <Img src={posterPath} alt="preview" />
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
        <StyledNavLink to="cast">Cast</StyledNavLink>
        <StyledNavLink to="reviews">Reviews</StyledNavLink>
      </Extra>
    </MovieCardWrap>
  );
};

export default MovieCard;
