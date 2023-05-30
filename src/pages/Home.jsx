// підключення React і хуків useState, useEffect
import React, { useState, useEffect } from 'react';

// підключення компонентів
import Loader from '../components/Loader/Loader';
import Title from '../components/Title/Title';
import ListOfMovies from '../components/ListOfMovies/ListOfMovies';

// підключення стилю контейнера, щоб відсікти ширину
import { Container } from 'components/App.styled';

// підключення функції отримання трендових фільмів із api
import { getTrendiingMovies } from '../utils/api';

const Home = () => {
  // стейти масив трендових фільмів і показ лоадеру і відловлення помилок
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [showLoader, setShowLoader] = useState(false);
  const [error, setError] = useState(null);

  // перше і єдине завантаження сторінки
  useEffect(() => {
    // вмикаємо лоадер
    setShowLoader(true);

    //отримуємо фільми, записуємо в стейт, ловимо помилки, на фінал знімаємо лоадер
    getTrendiingMovies()
      .then(data => {
        setTrendingMovies(data.results);
      })
      .catch(e => {
        setError(e.message);
      })
      .finally(() => {
        setShowLoader(false);
      });
  }, []);

  // Верстка головної сторінки
  // лоадер, секція-контейнер (семантика + обмеженя по ширині), заголовок, список трендових фільмів
  return (
    <>
      {showLoader && <Loader />}
      <section>
        <Container>
          {error && <p>{error}</p>}
          <Title text="Trending today" />
          <ListOfMovies trendingMovies={trendingMovies} />
        </Container>
      </section>
    </>
  );
};

export default Home;
