import styled from 'styled-components';

// пілключаємо контейнер тут, стилізуємо і передаємо в наш основний компонент
import { Container } from 'components/App.styled';

export const StyledFooter = styled.footer`
  background-color: #ff6b17;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 20px;
  /* position: fixed;
  bottom: 0;
  left: 0;
  width: 100%; */
`;

export const FooterContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
`;

export const FooterText = styled.p`
  color: white;
`;

export const FooterTextLink = styled.a`
  color: white;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;
