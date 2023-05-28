import styled from 'styled-components';

export const Ul = styled.ul`
  /*----Базовий стиль для мобілки до 479 (респонсивний)----*/
  /* border: 2px solid tomato; */
  list-style: none;
  padding: 0;
  width: 100%;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;

  /*----Базовий стиль для мобілки 480-767 (адаптивний)----*/
  @media screen and (min-width: 480px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
  }

  /*----Стиль для планшета 768-1200----*/

  @media screen and (min-width: 768px) {
  }

  /*----Стиль для компа від 1200----*/

  @media screen and (min-width: 1200px) {
  }
`;
