import React from 'react';
import PropTypes from 'prop-types';

const LoadMoreButton = ({ loadMoreMovies }) => {
  return (
    <>
      <button onClick={loadMoreMovies}>Load more</button>
    </>
  );
};

// перевірка PropTypes
LoadMoreButton.propTypes = {
  loadMoreMovies: PropTypes.func.isRequired,
};

export default LoadMoreButton;
