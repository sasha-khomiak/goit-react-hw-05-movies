// підключення React і хуків
import React from 'react';
import { useState, useEffect } from 'react';

// підключення useParams для отримання параметрів з адресного рядка
import { useParams } from 'react-router-dom';

// підключення функції отримання даних про фільм із api
import { getMovieById } from '../utils/api';

// підключення бібліотеки повідомлень
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// підключення компонентів
import Loader from '../components/Loader/Loader';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [filmInfo, setFilmInfo] = useState({});
  const [error, setError] = useState(null);
  const [showLoader, setShowLoader] = useState(false);

  // перше і єдине завантаження
  useEffect(() => {
    setShowLoader(true);
    getMovieById(movieId)
      .then(data => {
        setFilmInfo(data);
      })
      .catch(e => {
        setError(e.message);
        toast.error(e.message);
      })
      .finally(() => {
        setShowLoader(false);
      });
  }, [movieId]);
  console.log('filmInfo', filmInfo.poster_path);

  return (
    <>
      {showLoader && <Loader />}
      {error && <ToastContainer />}
      <img
        src={`https://image.tmdb.org/t/p/w500${filmInfo.poster_path}`}
        width={`100`}
        alt="preview"
      />
      <div>MovieDetails: {filmInfo.title}</div>
      <div>User score: ???? </div>
      <div>OVERVIEW </div>
      <div>{filmInfo.overview}</div>
      <div>Genres: </div>
      <div>тут жанри </div>
      <div>Additional information: </div>
      <div>cast </div>
      <div>reviewes </div>
    </>
  );
};

export default MovieDetails;
