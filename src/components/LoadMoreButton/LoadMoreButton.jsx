// бібліотека перевірки проп тайпів
import PropTypes from 'prop-types';

// підключення стилізованих компонентів
import { Button } from './LoadMoreButton.styled';

// компонент кнопки LoadMoreButton
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
