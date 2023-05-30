// імпорт бібліотеки PropTypes
import PropTypes from 'prop-types';

// підключення нестилізованого Link як обгортки для постера фільму
import { Link } from 'react-router-dom';

// підключення useLocation для отримання поточної адреси сторінки
import { useLocation } from 'react-router-dom';

// стилізовані компоненти для верстки
import { Li, Thumb, Img, StyledNavLink } from './ListOfMoviesItem.styled';

// постер, якщо на бекенді немає картинки
import NoPosterImage from '../../images/noPoster.jpg';

const ListOfMoviesItem = ({ movie }) => {
  // створюємо локейшн сторінки
  const location = useLocation();

  // постер  фільма, але якщо з api прийде постер, то міняємо його на той, що прийшов
  let posterPath = NoPosterImage;
  if (movie.poster_path) {
    posterPath = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  }

  // фільм огортаємо в Li (бо це елемент списку)
  // картинку огортаємо в Link на адресу фільма
  // в to вказуємо посилання в state - посилання на поточну сторінку
  // на бекенді назви фільмів зберігаються або в параметрі title або в name
  // бередьачаємо два варіанти залежно від того, де зберігається назва фільма
  return (
    <Li>
      <Link to={`/movies/${movie.id}`} state={{ from: location }}>
        <Thumb>
          <Img src={posterPath} width={`100%`} alt="preview" />
        </Thumb>
      </Link>

      {/* якщо назва фільму в параметрі film.title */}
      {movie.title && (
        <StyledNavLink to={`/movies/${movie.id}`} state={{ from: location }}>
          <span>{movie.title}</span>
        </StyledNavLink>
      )}
      {/* якщо назва фільму в параметрі film.name */}
      {movie.name && (
        <StyledNavLink to={`/movies/${movie.id}`} state={{ from: location }}>
          <span>{movie.name}</span>
        </StyledNavLink>
      )}
    </Li>
  );
};

export default ListOfMoviesItem;

// перевірка типів пропів
ListOfMoviesItem.propTypes = {
  movie: PropTypes.object.isRequired,
};
