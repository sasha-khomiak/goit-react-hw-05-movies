// бібліотека перевірки проптайпів
import PropTypes from 'prop-types';

// стилізовані компоненти
import { Ul, Li, Reviever } from './ReviewsList.styled';

// компонент верстки оглядів
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

ReviewsList.propTypes = {
  reviewes: PropTypes.array.isRequired,
};

export default ReviewsList;
