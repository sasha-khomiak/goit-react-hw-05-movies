// імпортуємо useState, useEffect
import { useState, useEffect } from 'react';

// імпорт бібліотеки отримання динамічних даних з адресного рядка після ?
import { useSearchParams } from 'react-router-dom';

// підключення бібліотеки повідомлень toastify
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

// підключення стилізованих компонентів контейнера для відсікання ширини
import { Container } from '../components/App.styled';

// картинка, якщо в результатах не буде постера
import SearchingImage from '../images/searching.gif';

// наш головний компонент
const Movies = () => {
  //наш стейт
  // moviesArray - масив для рендерингу
  // page - номер сторінки, за замовчанням 1
  // showBtnLoadMore - чи показувати кнопку завантажити ще
  // showLoader - чи показувати лоадер
  const [moviesArray, setMoviesArray] = useState([]);
  const [page, setPage] = useState(1);
  const [showBtnLoadMore, setShowBtnLoadMore] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  // query - пошуковий запит отриманий з адресного рядка після знаку ?
  // якщо такого параметра в адресному рядку немає то йому присвоюється null
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  // перша верстка використовуючи запис з адресного рядка
  useEffect(() => {
    // якщо параметрів в алресному рядку (query) немає, то просто виходимо
    if (!query) {
      return;
    }

    // якщо query існує: вмикаємо лоадер, робимо запит по query на api і першій сторінці
    // отриманий масив об'єктів фільмів записуємо в moviesArray
    // якщо загальна кількість результатів на api більше від 20, то показуємо кнопку load more
    // по заверщенню вимикаємо лоадер
    setShowLoader(true);
    getMoviesByNameAndPage(query, 1)
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
    // eslint-disable-next-line
  }, []);

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
  // записуємо в стейт, на початку показуємо, а на фінал знімаємо лоадер
  const getFromAPI = (toFind, page) => {
    setShowLoader(true);
    //запит на сервер
    getMoviesByNameAndPage(toFind, page)
      .then(data => {
        // якщо немає жодного збігу, то виводимо про це повідомлення
        // і скидаємо стейт до початкового стану (query, page, showBtnLoadMore), щоб не засмічувався
        if (data.total_results < 1) {
          toast.error(`За запитом "${toFind}" результатів нема!`);
          setPage(1);
          setSearchParams({});
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
      .finally(() => {
        setShowLoader(false);
      });
  };

  // верстка нашого компонента: показуємо лоадер, контейнер повідомлень
  // все поміщаємо і секція - контейнер
  // заголовок контейнера, форма пошуку, картинка коли нема результатів, блок результатів
  return (
    <>
      {showLoader && <Loader />}
      <ToastContainer autoClose={2000} />
      <section>
        <Container>
          <Title text="Search movies" />
          <Searchbar onSubmit={onSubmitSearchBtn} />

          {moviesArray.length === 0 && (
            <img src={SearchingImage} alt="searching" />
          )}
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
