// імпорт бібліотеки PropTypes
import PropTypes from 'prop-types';

// підключаємо компонент одного конкретного фільма для мапання
import ListOfMoviesItem from '../ListOfMoviesItem/ListOfMoviesItem';

// стилізований компонент (прибираємо ліст стайл і паддінги)
import { Ul } from './ListOfMovies.styled';

// в компоненті із отриманого масива фільмів мапаємо(перебираємо) і
//  верстаємо компонент одного фільма
const ListOfMovies = ({ trendingMovies }) => {
  return (
    <Ul>
      {trendingMovies.map(movie => (
        <ListOfMoviesItem key={movie.id} movie={movie} />
      ))}
    </Ul>
  );
};

// перевірка пропТайпів
ListOfMovies.propTypes = {
  trendingMovies: PropTypes.array.isRequired,
};

export default ListOfMovies;
