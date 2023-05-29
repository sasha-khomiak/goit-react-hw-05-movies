import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieReviewById } from '../../utils/api';

import ReviewsList from '../ReviewsList/ReviewsList';

const Reviews = () => {
  const [reviewes, setReviewes] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviewById(movieId).then(data => {
      if (data.results.length === 0) {
        return;
      }
      // console.log(data);
      setReviewes(data.results);
    });
  }, [movieId]);

  return (
    <>
      {reviewes && <ReviewsList reviewes={reviewes} />}
      {!reviewes && <p>There is no reviews!</p>}
    </>
  );
};

export default Reviews;
