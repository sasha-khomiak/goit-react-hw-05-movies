// бібліотека перевірки проп тайпів
import PropTypes from 'prop-types';

// стиліщовані компоненти
import { Ul } from './CastList.styled';

// компонент для верстки одного актора
import CastListItem from '../CastListItem/CastListItem';

// компонент CastList
// у ньому мапаємо масив акторів і передаємо в компонент відображення одного актора
const CastList = ({ cast }) => {
  return (
    <Ul>
      {cast.map(actor => (
        <CastListItem key={actor.cast_id} actor={actor} />
      ))}
    </Ul>
  );
};

// перевірка проптипів
CastList.propTypes = {
  cast: PropTypes.array.isRequired,
};

export default CastList;
