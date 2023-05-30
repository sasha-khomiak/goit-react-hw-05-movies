import styled from 'styled-components';

// стиль контейнера створив в Арр, тому що він імпортується у всі сторінки

export const Container = styled.div`
  /*----Базовий стиль для мобілки до 479 (респонсивний)----*/
  /* outline: 2px solid tomato; */
  width: 100%;
  max-width: 479px;
  padding: 0 15px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding-top: 15px;

  /*----Базовий стиль для мобілки 480-767 (адаптивний)----*/
  @media screen and (min-width: 480px) {
    max-width: 480px;
  }

  /*----Стиль для планшета 768-1200----*/

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  /*----Стиль для компа від 1200----*/

  @media screen and (min-width: 1200px) {
    max-width: 1200px;
  }
`;
