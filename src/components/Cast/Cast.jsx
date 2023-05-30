// підключення бібліотеки для роботи зі useState, useEffect
import { useState, useEffect } from 'react';

// підключення бібліотеки для отримання параметрів з адресного рядка
import { useParams } from 'react-router-dom';

// ф-ія отримання акторів по Id фільма
import { getMovieCastById } from '../../utils/api';

// компонент CastList, який верстатиме акторів за наданим йому масивом обʼєктів
import CastList from '../CastList/CastList';

// стилізовані компоненти (якщо ніяких акторів в базі немає)
import { NoCast, NoCastText } from './Cast.styled';

// компонент
const Cast = () => {
  // стейт в якому  будемо зберігати  масив обʼєктів про акторів
  const [cast, setCast] = useState(null);

  // отримуємо Id фільма із нашого адресного рядка (див Арр)
  const { movieId } = useParams();

  // Якщо мінятимется параметр movieId в адресному рядку
  // отримуємо дані про актоів фільму
  // якщо довжина масива 0, то просто виходимо
  // якщо прийшов хоч 1 результат в масиві, то записуємо його в cast
  useEffect(() => {
    getMovieCastById(movieId).then(data => {
      if (data.cast.length === 0) {
        return;
      }
      setCast(data.cast);
    });
  }, [movieId]);

  // якщо в масиві cast є дані, то верстаємо, якщо нема, то виводимо повідомлення, що результатів немає
  return (
    <>
      {cast && <CastList cast={cast} />}
      {!cast && (
        <NoCast>
          <NoCastText>There is no casts</NoCastText>
        </NoCast>
      )}
    </>
  );
};

export default Cast;
