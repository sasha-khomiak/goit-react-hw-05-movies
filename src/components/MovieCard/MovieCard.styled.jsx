import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const MovieCardWrap = styled.div`
  /*----Базовий стиль для мобілки до 479 (респонсивний)----*/
  display: flex;
  flex-direction: column;

  /*----Базовий стиль для мобілки 480-767 (адаптивний)----*/
  @media screen and (min-width: 480px) {
    flex-direction: row;
    flex-wrap: wrap;
  }

  /* ----Стиль для планшета 768-1200----

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  /*----Стиль для компа від 1200----*/

  /* @media screen and (min-width: 1200px) {
    max-width: 1200px;
  } */
`;

export const Img = styled.img`
  width: 100%;
  /*----Базовий стиль для мобілки 480-767 (адаптивний)----*/
  @media screen and (min-width: 480px) {
    max-width: 150px;
    margin-right: 10px;
  }
`;

export const MovieTitle = styled.h2`
  color: #ff6b17;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Title = styled.h2`
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Extra = styled.nav`
  padding: 20px;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  /* ----Базовий стиль для мобілки 480-767 (адаптивний)----
  @media screen and (min-width: 480px) {
    padding-left: 0;
  } */

  @media screen and (min-width: 768px) {
    padding-left: 0;
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: #ff6b17;
  text-decoration: none;
  background: #ffe9dc;
  /* border: 2px solid rgb(164, 71, 17); */
  border-radius: 50px;
  padding: 9px 30px;
  min-width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 250ms linear;

  &:hover {
    transform: scale(1.1);
    background: #ff6b17;
    color: white;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
  }

  &.active {
    font-weight: 900;
    background: #ff6b17;
    color: white;
  }
`;
