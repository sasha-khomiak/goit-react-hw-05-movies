import React from 'react';
// import PropTypes from 'prop-types'

import { Ul } from './CastList.styled';

import CastListItem from '../CastListItem/CastListItem';

const CastList = ({ cast }) => {
  // console.log('cast', cast);
  return (
    <Ul>
      {cast.map(actor => (
        <CastListItem key={actor.cast_id} actor={actor} />
      ))}
    </Ul>
  );
};

// CastList.propTypes = {}

export default CastList;
