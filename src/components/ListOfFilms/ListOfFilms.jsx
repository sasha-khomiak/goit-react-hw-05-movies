import React from 'react';
// import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom';

import { Ul } from './ListOfFilms.styled';

const ListOfFilms = ({ trendingFilms }) => {
  return (
    <Ul>
      {trendingFilms.map(film => {
        // якщо назва фільму в параметрі film.title
        return (
          <li key={film.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
              width={`150`}
              alt="preview"
            />
            {/* якщо назва фільму в параметрі film.title */}
            {film.title && (
              <NavLink to={`/movies/${film.id}`}>{film.title}</NavLink>
            )}
            {/* якщо назва фільму в параметрі film.name */}
            {film.name && (
              <NavLink to={`/movies/${film.id}`}>{film.name}</NavLink>
            )}
          </li>
        );
      })}
    </Ul>
  );
};

// ListOfFilms.propTypes = {}

export default ListOfFilms;
