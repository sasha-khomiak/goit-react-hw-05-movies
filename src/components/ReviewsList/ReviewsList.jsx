import React from 'react';
// import PropTypes from 'prop-types'

import { Ul, Li, Reviever } from './ReviewsList.styled';

const ReviewsList = ({ reviewes }) => {
  //   console.log('reviewes', reviewes);
  return (
    <Ul>
      {reviewes.map(review => {
        // console.log('review', review);
        return (
          <Li key={review.id}>
            <Reviever>Reviewer: {review.author}</Reviever>
            <p>{review.content}</p>
          </Li>
        );
      })}
    </Ul>
  );
};

// ReviewsList.propTypes = {}

export default ReviewsList;
