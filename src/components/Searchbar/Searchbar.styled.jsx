import styled from 'styled-components';

//npm install react-svg
import { ReactSVG } from 'react-svg';

export const Form = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  margin-left: auto;
  margin-right: auto;
`;

export const SearchBtn = styled.button`
  position: absolute;
  z-index: 1000;
  background-color: transparent;
  border: none;
  margin-left: 10px;
  margin-right: auto;
  /* padding: 0; */
  /* width: 20px; */
  /* height: 20px; */
  cursor: pointer;
  color: rgba(255, 107, 23, 0.5);
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: center; */

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    transform: scale(1.1);
    color: rgba(255, 107, 23, 1);
    /* background-color: rgba(255, 107, 23, 1); */
  }
`;

export const BtnIcon = styled(ReactSVG)`
  width: 20px;
  height: 20px;
  fill: currentColor;
  /* fill: black; */
`;

export const Input = styled.input`
  /* position: absolute; */
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  padding: 20px 30px;
  padding-left: 48px;
  /* gap: 10px; */

  width: 300px;
  height: 48px;

  background: #ffe9dc;
  border: 2px solid rgba(255, 107, 23, 0.15);
  border-radius: 50px;
  font-weight: bold;
  color: rgba(255, 107, 23, 1);

  &:focus {
    outline: 2px solid rgba(255, 107, 23, 1);
  }

  ::placeholder {
    color: rgba(255, 107, 23, 1);
    font-weight: 300;
  }
`;
