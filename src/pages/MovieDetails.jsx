// підключення  і хуків useState, useEffect
import { useState, useEffect } from 'react';

// підключення useParams для отримання параметрів з адресного рядка
// підключення Outlet в який поміститься вміст кастс і ревью. див маршрутизацію вкладеності в Арр
import { useParams, Outlet } from 'react-router-dom';

// підключення функції отримання даних про фільм із api
import { getMovieById } from '../utils/api';

// підключення компонентів
import Loader from '../components/Loader/Loader';
import MovieCard from '../components/MovieCard/MovieCard';

// підключення стилізованоно контейнера для відсікання щирини
import { Container } from 'components/App.styled';

// компонент сторінки MovieDetails
const MovieDetails = () => {
  // отримуємо movieId із адресного рядка
  const { movieId } = useParams();

  // масив у якому зберігатимемо  обʼєкт з описом фільма
  const [movieInfo, setMovieInfo] = useState(null);

  // стан показування лоадера
  const [showLoader, setShowLoader] = useState(false);

  // завантаження даних з сервера і встановлення стейтів
  useEffect(() => {
    setShowLoader(true);
    getMovieById(movieId)
      .then(data => {
        setMovieInfo(data);
      })
      .finally(() => {
        setShowLoader(false);
      });
  }, [movieId]);

  // рендеринг картки фільма: блок лоадера, секція з контейнером,
  // всередині картка про фільм і Outlet в якому будуть ревью і касти
  return (
    <>
      {showLoader && <Loader />}

      <section>
        <Container>
          {movieInfo && <MovieCard movieInfo={movieInfo} />}
          <Outlet />
        </Container>
      </section>
    </>
  );
};

export default MovieDetails;
