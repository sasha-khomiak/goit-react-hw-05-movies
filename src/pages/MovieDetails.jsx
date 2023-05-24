import React from 'react';
// import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = props => {
  const { movieId } = useParams();
  const [filmInfo, setFilmInfo] = useState({});

  useEffect(() => {
    const API_KEY = 'f051ac50d3bfe0c3fd75f02c1ff7b688';
    const BASE_URL = 'https://api.themoviedb.org/';
    const URL = `${BASE_URL}3/movie/${movieId}?api_key=${API_KEY}`;

    fetch(URL)
      .then(res => res.json())
      .then(data => {
        console.log('data', data);
        setFilmInfo(data);
        // console.log(filmInfo);
      })
      .catch();
  }, []);
  console.log('filmInfo', filmInfo.poster_path);
  return (
    <>
      <img
        src={`https://image.tmdb.org/t/p/w500${filmInfo.poster_path}`}
        width={`100`}
        alt="preview"
      />
      <div>MovieDetails: {filmInfo.title}</div>
      <div>User score: ???? </div>
      <div>OVERVIEW </div>
      <div>{filmInfo.overview}</div>
      <div>Genres: </div>
      <div>тут жанри </div>
      <div>Additional information: </div>
      <div>cast </div>
      <div>reviewes </div>
    </>
  );
};

// MovieDetails.propTypes = {};

export default MovieDetails;
