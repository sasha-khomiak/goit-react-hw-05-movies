import { Li } from './ListOfMoviesItem.styled';

import { NavLink } from 'react-router-dom';

const ListOfMoviesItem = ({ movie }) => {
  // якщо назва фільму в параметрі film.title
  return (
    <Li>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        width={`100%`}
        alt="preview"
      />
      {/* якщо назва фільму в параметрі film.title */}
      {movie.title && (
        <NavLink to={`/movies/${movie.id}`}>{movie.title}</NavLink>
      )}
      {/* якщо назва фільму в параметрі film.name */}
      {movie.name && <NavLink to={`/movies/${movie.id}`}>{movie.name}</NavLink>}
    </Li>
  );
};

export default ListOfMoviesItem;
