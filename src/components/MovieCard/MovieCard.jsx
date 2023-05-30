// імпорт бібліотеки PropTypes
import PropTypes from 'prop-types';

// іпморт бібліотеки для роботи з локейшн
import { useLocation } from 'react-router-dom';

// бібліотека для роботи з useRef
import { useRef } from 'react';

// стилізовані компоненти
import {
  MovieCardWrap,
  MovieBlock,
  Img,
  MovieTitle,
  Title,
  StyledNavLink,
  StyledNavLinkBack,
  Extra,
} from './MovieCard.styled';

// картинка, якщо немає на бекенді постера фільма
import NoPosterImage from '../../images/noPoster.jpg';

// компонент картка нашого фільма

const MovieCard = ({ movieInfo }) => {
  // створюємо локейшн (у ньому є state в якому вказано звідки ми прийшли)
  // Використовуючи useRef створюємо backLinkLocationRef (посилання звідки ми прийшли)
  // location.state?.from те саме, що і location.state && location.state.from
  // при перерендерингу значення цієї змінної не зітреться
  // ?? '/' вказуємо на випадок, якшо ми прийшли по прямому лінку, тоді це буде шлях на головну
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  // рахуємо score
  const score = Math.round(movieInfo.vote_average * 10);

  // витягаємо жанри і обʼєднуємо в рядок через кому
  let genres = movieInfo.genres.map(genre => genre.name).join(', ');

  // присвоюємо постеру за замовчанням картинку, якщо в пропсі є шлях на картинку то оновлюємо
  let posterPath = NoPosterImage;
  if (movieInfo.poster_path) {
    posterPath = `https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`;
  }

  // рендеринг картки фільма
  // на кнопку Back ставимо раніше створене посилання на сторінку
  // оформлюємо картку стилізованими компонентами
  // лінки NavLink стилізуємо у файлі стилізованих компонентів
  return (
    <MovieCardWrap>
      <StyledNavLinkBack to={backLinkLocationRef.current}>
        Back
      </StyledNavLinkBack>

      <MovieBlock>
        <div>
          <Img src={posterPath} alt="preview" />
        </div>
        <div>
          <MovieTitle>{movieInfo.title}</MovieTitle>
          <p>User score: {score} </p>

          <Title>Overview </Title>
          <div>{movieInfo.overview}</div>
          <Title>Genres </Title>
          <p>{genres} </p>
        </div>
      </MovieBlock>
      <Extra>
        <StyledNavLink to="cast">Cast</StyledNavLink>
        <StyledNavLink to="reviews">Reviews</StyledNavLink>
      </Extra>
    </MovieCardWrap>
  );
};

export default MovieCard;

// перевірка пропТайпів
MovieCard.propTypes = {
  movieInfo: PropTypes.object.isRequired,
};
