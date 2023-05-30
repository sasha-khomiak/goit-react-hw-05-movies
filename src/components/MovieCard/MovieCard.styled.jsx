import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const MovieCardWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MovieBlock = styled.div`
  /* ----Стиль для планшета 768-1200----*/
  /*----Стиль для компа від 1200----*/
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`;

export const Img = styled.img`
  width: 100%;
  /* ----Стиль для планшета 768-1200----*/
  @media screen and (min-width: 768px) {
    /* max-width: 150px; */
    width: 300px;
    margin-right: 20px;
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

export const StyledNavLinkBack = styled(NavLink)`
  color: #ff6b17;
  text-decoration: none;
  background: #ffe9dc;
  /* border: 2px solid rgb(164, 71, 17); */
  border-radius: 50px;
  padding: 9px 30px;
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 250ms linear;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;

  &:hover {
    transform: scale(1.1);
    background: #ff6b17;
    color: white;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
  }

  @media screen and (min-width: 768px) {
    margin-left: 0;
  }
`;
