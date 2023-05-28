import styled from 'styled-components';

import { Container } from 'components/App.styled';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  background-color: #ff6b17;
  padding-top: 10px;
  padding-bottom: 10px;
  /* width: 100%; */
`;

export const HeaderContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;

  /*----Стиль для планшета 768-1200----*/
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const LogoImg = styled.img`
  width: 150px;
  animation: wiggle 3s linear infinite;

  @keyframes wiggle {
    0%,
    7% {
      transform: rotateZ(0);
    }

    15% {
      transform: rotateZ(-15deg);
    }

    20% {
      transform: rotateZ(10deg);
    }

    25% {
      transform: rotateZ(-10deg);
    }

    30% {
      transform: rotateZ(6deg);
    }

    35% {
      transform: rotateZ(-4deg);
    }

    40%,
    100% {
      transform: rotateZ(0);
    }
  }
`;

export const Nav = styled.nav`
  padding: 20px;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const StyledNavLink = styled(NavLink)`
  color: #ff6b17;
  text-decoration: none;
  background: #ffe9dc;
  border: 2px solid rgb(164, 71, 17);
  border-radius: 50px;
  padding: 9px 30px;
  min-width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 250ms linear;

  &:hover {
    transform: scale(1.1);
    background: #ffe9dc;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
  }

  &.active {
    font-weight: 900;
  }
`;
