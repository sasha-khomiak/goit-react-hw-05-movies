import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './LoadMoreButton.styled';

const LoadMoreButton = ({ loadMoreMovies }) => {
  return (
    <>
      <Button onClick={loadMoreMovies}>Load more</Button>
    </>
  );
};

// перевірка PropTypes
LoadMoreButton.propTypes = {
  loadMoreMovies: PropTypes.func.isRequired,
};

export default LoadMoreButton;
