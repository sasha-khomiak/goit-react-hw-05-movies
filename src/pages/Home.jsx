// підключення React і хуків useState, useEffect
import React, { useState, useEffect } from 'react';
// import { NavLink } from 'react-router-dom';

// підключення бібліотеки повідомлень
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// підключення компонентів
import Loader from '../components/Loader/Loader';
import ListOfMovies from '../components/ListOfMovies/ListOfMovies';

// підключення стилю контейнера
import { Container } from 'components/App.styled';

import Title from '../components/Title/Title';

// підключення функції отримання трендових фільмів із api
import { getTrendiingMovies } from '../utils/api';

const Home = () => {
  // стейти
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [showLoader, setShowLoader] = useState(false);
  // const [error, setError] = useState(null);

  // перше і єдине завантаження
  useEffect(() => {
    // вмикаємо лоадер
    setShowLoader(true);

    //отримуємо фільми, записуємо в стейт, ловимо помилки, на фінал знімаємо лоадер
    getTrendiingMovies()
      .then(data => {
        setTrendingMovies(data.results);
      })
      // .catch(e => {
      // setError(e.message);
      // toast.error(e.message);
      // console.log('error', error);
      // })
      .finally(() => {
        setShowLoader(false);
      });
  }, []);

  // Верстка сторінки
  return (
    <>
      {showLoader && <Loader />}
      {/* <ToastContainer /> */}
      <section>
        <Container>
          <Title text="Trending today" />
          <ListOfMovies trendingMovies={trendingMovies} />
        </Container>
      </section>
    </>
  );
};

export default Home;
