import styled from 'styled-components';

export const Button = styled.button`
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
  transition: transform 250ms linear, background-color 250ms linear,
    color 250ms linear;
  margin: 10px auto 30px auto;

  &:hover {
    transform: scale(1.1);
    background: #ff6b17;
    color: #ffe9dc;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
  }
`;
