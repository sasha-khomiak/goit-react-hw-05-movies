// імпортуємо useState
import { useState, useEffect } from 'react';

import { useSearchParams } from 'react-router-dom';

// підключення бібліотеки повідомлень
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// підключення функції отримання фільмів за назвою і сторінкою із api
import { getMoviesByNameAndPage } from '../utils/api';

// підключення компонентів
import Title from '../components/Title/Title';
import Searchbar from '../components/Searchbar/Searchbar';
import ListOfMovies from 'components/ListOfMovies/ListOfMovies';
import Loader from 'components/Loader/Loader';
import LoadMoreButton from '../components/LoadMoreButton/LoadMoreButton';

// підключення стилізованих компонентів
import { Container } from '../components/App.styled';

// наш головний компонент
const Movies = () => {
  //наш стейт
  // moviesArray - масив для рендерингу
  // query - пошуковий запит після сабміту
  // showModal - чи показуємо модалку
  // page - номер сторінки, за замовчанням 1
  // showBtnLoadMore - чи показувати кнопку завантажити ще
  // isLoading - чи показувати лоадер
  const [moviesArray, setMoviesArray] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [showBtnLoadMore, setShowBtnLoadMore] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query');

  // перша верстка використовуючи запис з адресного рядка
  useEffect(() => {
    // якщо параметрів немає, то просто виходимо
    if (!movieName) {
      return;
    }
    setQuery(movieName);
    setShowLoader(true);
    getMoviesByNameAndPage(movieName, 1)
      .then(data => {
        setMoviesArray([...data.results]);
        const alreadyDownloaded = 20 * 1;
        if (alreadyDownloaded < data.total_results) {
          setShowBtnLoadMore(true);
        }
      })
      .finally(() => {
        setShowLoader(false);
      });
  }, [movieName]);

  // що робити з отриманими даними при натиску кнопки SUBMIT у формі
  // викликати ф-ію, яка стирає moviesArray на пустий і скидає page на 1
  // записує значення пошукового запиту в поле query
  // викликає функцію запиту на сервер за комбінацією запиту і першою сторінкою
  // записуємо в адресний рядок параметр query, зі значенням toFind яке шукаємо
  const onSubmitSearchBtn = toFind => {
    if (toFind === query) {
      toast(`Ви повторно намагаєтесь знайти відео про: "${toFind}"!`);
      return;
    }
    setMoviesArray([]);
    setPage(1);
    setQuery(toFind);
    getFromAPI(toFind, 1);
    setSearchParams({ query: toFind });
  };

  // при натиску кнопки LOAD_MORE
  // ми викликаємо функцію яка повертає ше фільми за запитом із збільшеним на 1 номером сторінки
  // в стейт перезаписуємо сторінку + 1
  const loadMoreMovies = () => {
    getFromAPI(query, page + 1);
    setPage(prevPage => prevPage + 1);
  };

  // функція, яка за запитом і сторінкою отримує дані про фільми і
  // записуємо в стейт, ловимо помилки(?), на початку показуємо, а на фінал знімаємо лоадер
  const getFromAPI = (toFind, page) => {
    setShowLoader(true);
    //запит на сервер
    getMoviesByNameAndPage(toFind, page)
      .then(data => {
        // console.log('data', data);
        // якщо немає жодного збігу, то виводимо про це повідомлення
        // і скидаємо стейт до початкового стану (query, page, showBtnLoadMore), щоб не засмічувався
        if (data.total_results < 1) {
          toast.error(`За запитом "${toFind}" результатів нема!`);
          setPage(1);
          setQuery('');
          setShowBtnLoadMore(false);
        }
        //Якщо у нас є результати для показу, то треба
        // записати (розпилити) в стейт moviesArray отриманий масив
        else if (data.total_results !== 0) {
          setMoviesArray(prevMoviesArray => [
            ...prevMoviesArray,
            ...data.results,
          ]);
          //
          //рахуємо чи є ще на сервері фільми.
          //тобто чи треба показувати кнопку "завантажити ще" (статус showBtnLoadMore)
          // для цього кількість результатів у одному запиті множимо на поточний номер сторінки
          // і отримуємо кількість уже отриманих на компі фільмів
          // на сервері лишаються ще фільми, якщо ця цифра менше за data.total_results
          const alreadyDownloaded = 20 * page;
          if (alreadyDownloaded < data.total_results) {
            // перше повідомлення, якщо це перший виведений результат
            if (page === 1) {
              toast(
                `За запитом "${toFind}" знайдено фільмів: ${data.total_results}. Натисни "завантажити ще", щоб отримати ще 20 фільмів!`
              );
            }
            // повідомлення, якщо отримуємо другий чи подальший результат
            else {
              const moreMovies = data.total_results - alreadyDownloaded;
              toast(
                `За запитом "${toFind}" лишилося ще фільмів: ${moreMovies} із ${data.total_results}. Натисни "завантажити ще", щоб отримати ще 20 фільмів!`
              );
            }
            // оскільки на сервері ще є фільми, то показуємо кнопку завантажити ще
            setShowBtnLoadMore(true);
          }
          // якщо ж на сервері більше не лишилося фільмів, то виводимо про це повідомлення і прибираємо кнопку LoadMore
          else {
            toast(
              `Це всі результати за запитом "${toFind}". Більше результатів нема!`
            );
            setShowBtnLoadMore(false);
          }
        }
      })
      // .catch(e => {
      // setError(e.message);
      // toast.error(e.message);
      // console.log('error', error);
      // })
      .finally(() => {
        setShowLoader(false);
      });
  };

  return (
    <>
      {showLoader && <Loader />}
      <ToastContainer autoClose={2000} />
      <section>
        <Container>
          <Title text="Search movies" />
          <Searchbar onSubmit={onSubmitSearchBtn} />
          {moviesArray.length !== 0 && (
            <ListOfMovies trendingMovies={moviesArray} />
          )}

          {showBtnLoadMore && (
            <LoadMoreButton loadMoreMovies={loadMoreMovies} />
          )}
        </Container>
      </section>
    </>
  );
};

export default Movies;
