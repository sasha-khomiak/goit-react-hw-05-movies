import React from 'react';
// import PropTypes from 'prop-types'

const ReviewsList = ({ reviewes }) => {
  console.log('reviewes', reviewes);
  return (
    <ul>
      {reviewes.map(review => {
        return (
          <li>
            <p>{review.author}</p>
            <p>{review.content}</p>
          </li>
        );
      })}
    </ul>
  );
};

// ReviewsList.propTypes = {}

export default ReviewsList;
