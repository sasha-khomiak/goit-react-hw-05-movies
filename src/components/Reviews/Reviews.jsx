// підключення бібліотеки для роботи зі useState, useEffect
import { useState, useEffect } from 'react';

// підключення бібліотеки для отримання параметрів з адресного рядка
import { useParams } from 'react-router-dom';

// ф-ія отримання огдядів по Id фільма
import { getMovieReviewById } from '../../utils/api';

// компонент ReviewsList, який верстатиме огляди за наданим йому масивом
import ReviewsList from '../ReviewsList/ReviewsList';

// стилізовані компоненти (якщо ніяких ревʼю немає)
import { NoRevievews, NoRevievewsText } from './Reviews.styled';

// компонент Reviews
const Reviews = () => {
  // стейт в якому  будемо зберігати  масив ревʼю
  const [reviewes, setReviewes] = useState(null);

  // отримуємо Id фільма із нашого адресного рядка (див Арр)
  const { movieId } = useParams();

  // Якщо мінятимется параметр movieId в адресному рядку
  // отримуємо дані про огляди на фільм
  // якщо довжина масива 0, то просто виходимо
  // якщо прийшов хоч 1 результат в масиві, то записуємо його в reviewes
  useEffect(() => {
    getMovieReviewById(movieId).then(data => {
      if (data.results.length === 0) {
        return;
      }
      setReviewes(data.results);
    });
  }, [movieId]);

  // якщо в масиві reviewes є дані, то верстаємо, якщо нема, то виводимо повідомлення, що результатів немає
  return (
    <>
      {reviewes && <ReviewsList reviewes={reviewes} />}
      {!reviewes && (
        <NoRevievews>
          <NoRevievewsText>There is no reviews!</NoRevievewsText>
        </NoRevievews>
      )}
    </>
  );
};

export default Reviews;
