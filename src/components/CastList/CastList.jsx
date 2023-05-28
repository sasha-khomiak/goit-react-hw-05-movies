import React from 'react';
// import PropTypes from 'prop-types'

import CastListItem from '../CastListItem/CastListItem';

const CastList = ({ cast }) => {
  console.log('cast', cast);
  return (
    <ul>
      {cast.map(actor => (
        <CastListItem key={actor.cast_id} actor={actor} />
      ))}
    </ul>
  );
};

// CastList.propTypes = {}

export default CastList;
