import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types'

const Home = () => {
  const [trendingFilms, setTrendingFilms] = useState([]);

  useEffect(() => {
    const API_KEY = 'f051ac50d3bfe0c3fd75f02c1ff7b688';
    const BASE_URL = 'https://api.themoviedb.org/';
    const URL = `${BASE_URL}3/trending/all/day?api_key=${API_KEY}`;

    fetch(URL)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setTrendingFilms(data.results);
      });
  }, []);

  // Верстка
  return (
    <div>
      <h1>Trending today</h1>
      <ol>
        {trendingFilms.map(film => {
          // якщо назва фільму в параметрі film.title
          return (
            <li key={film.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                width={`100`}
                alt="preview"
              />
              {/* якщо назва фільму в параметрі film.title */}
              {film.title && <p>{film.title}</p>}
              {/* якщо назва фільму в параметрі film.name */}
              {film.name && <p>{film.name}</p>}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

// Home.propTypes = {}

export default Home;
