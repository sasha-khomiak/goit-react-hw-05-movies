import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const Li = styled.li`
  /*----Базовий стиль для мобілки до 479 (респонсивний)----*/
  width: 100%;
  display: flex;
  flex-direction: column;
  /* gap: 20px; */

  /*----Базовий стиль для мобілки 480-767 (адаптивний)----*/
  @media screen and (min-width: 480px) {
    max-width: 220px;
  }

  /*----Стиль для планшета 768-1200----*/

  @media screen and (min-width: 768px) {
    max-width: 177px;
  }

  /*----Стиль для компа від 1200----*/

  @media screen and (min-width: 1200px) {
    max-width: 226px;
  }
`;

export const Thumb = styled.div`
  height: 100%;
  border-radius: 15px;
  margin-bottom: 10px;
  overflow: hidden;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  cursor: pointer;

  /*----Базовий стиль для мобілки 480-767 (адаптивний)----*/
  @media screen and (min-width: 480px) {
    max-width: 220px;
    height: 330px;
  }

  /*----Стиль для планшета 768-1200----*/

  @media screen and (min-width: 768px) {
    max-width: 177px;
    height: 265px;
  }

  /*----Стиль для компа від 1200----*/

  @media screen and (min-width: 1200px) {
    max-width: 226px;
    height: 339px;
  }
`;

export const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: scale 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  display: block;

  &:hover {
    scale: 1.1;
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  height: 100% !important;
  align-items: center;
  text-align: center;
  justify-content: center;

  height: auto;
  text-decoration: none;
  color: #ff6b17;
  padding: 9px 5px;
  background: #ffe9dc;
  border: 2px solid rgba(255, 107, 23, 0.15);
  border-radius: 15px;

  :hover {
    background: #ff6b17;
    color: #f5f5f5;
  }
`;
