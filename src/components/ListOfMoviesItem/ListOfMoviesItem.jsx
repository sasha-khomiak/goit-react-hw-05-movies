import { Li, Thumb, Img, StyledNavLink } from './ListOfMoviesItem.styled';

import { Link } from 'react-router-dom';

import NoPosterImage from '../../images/Untitled-1.jpg';

const ListOfMoviesItem = ({ movie }) => {
  let posterPath = NoPosterImage;
  if (movie.poster_path) {
    posterPath = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  }

  // якщо назва фільму в параметрі film.title
  return (
    <Li>
      <Link to={`/movies/${movie.id}`}>
        <Thumb>
          <Img src={posterPath} width={`100%`} alt="preview" />
        </Thumb>
      </Link>

      {/* якщо назва фільму в параметрі film.title */}
      {movie.title && (
        <StyledNavLink to={`/movies/${movie.id}`}>
          {' '}
          <span>{movie.title}</span>
        </StyledNavLink>
      )}
      {/* якщо назва фільму в параметрі film.name */}
      {movie.name && (
        <StyledNavLink to={`/movies/${movie.id}`}>
          <span>{movie.name}</span>
        </StyledNavLink>
      )}
    </Li>
  );
};

export default ListOfMoviesItem;
