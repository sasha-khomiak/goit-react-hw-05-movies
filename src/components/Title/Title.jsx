// імпорт бібліотеки PropTypes
import PropTypes from 'prop-types';

// імпорт стилю заголовка
import { StyledTitle } from './Title.styled';

const Title = ({ text }) => {
  return <StyledTitle>{text}</StyledTitle>;
};

export default Title;

// перевірка типів пропів
Title.propTypes = {
  text: PropTypes.string.isRequired,
};
