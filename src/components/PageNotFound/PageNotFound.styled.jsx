import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const Img = styled.img`
  max-width: 300px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
`;

export const StyledNavLink = styled(NavLink)`
  color: #ff6b17;
  text-decoration: none;
  background: #ffe9dc;
  /* border: 2px solid rgb(164, 71, 17); */
  border-radius: 50px;
  padding: 9px 30px;
  max-width: 220px;
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
`;
