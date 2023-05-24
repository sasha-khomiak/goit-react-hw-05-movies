import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
// import PropTypes from 'prop-types'

import Loader from '../components/Loader/Loader';
import ListOfFilms from '../components/ListOfFilms/ListOfFilms';

const Home = () => {
  const [trendingFilms, setTrendingFilms] = useState([]);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const API_KEY = 'f051ac50d3bfe0c3fd75f02c1ff7b688';
    const BASE_URL = 'https://api.themoviedb.org/';
    const URL = `${BASE_URL}3/trending/all/day?api_key=${API_KEY}`;
    setShowLoader(true);
    fetch(URL)
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        setTrendingFilms(data.results);
        setShowLoader(false);
      });
  }, []);

  // Верстка
  return (
    <div>
      {showLoader && <Loader />}

      <h1>Trending today</h1>
      <ListOfFilms trendingFilms={trendingFilms} />
    </div>
  );
};

// Home.propTypes = {}

export default Home;
