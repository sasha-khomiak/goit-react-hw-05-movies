import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
// import PropTypes from 'prop-types';

import { getMovieCastById } from '../../utils/api';

import CastList from '../CastList/CastList';

import { NoCast, NoCastText } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCastById(movieId).then(data => {
      //   console.log('data', data);
      if (data.cast.length === 0) {
        return;
      }
      setCast(data.cast);
    });
  }, [movieId]);
  return (
    <>
      {cast && <CastList cast={cast} />}
      {!cast && (
        <NoCast>
          <NoCastText>There is no casts</NoCastText>
        </NoCast>
      )}
    </>
  );
};

// Cast.propTypes = {};

export default Cast;
