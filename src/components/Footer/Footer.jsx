// підключення стилізованих компонентів футера
// цікавить FooterContainer - Container підключаємо в файл стилізації і після цього - сюди
import {
  StyledFooter,
  FooterContainer,
  FooterText,
  FooterTextLink,
} from './Footer.styled';

// компонент футера стилізованиі секція-контейнер і всередині вміст футера
const Footer = () => {
  return (
    <StyledFooter>
      <FooterContainer>
        <FooterText>
          &#169; Copyright&nbsp;
          <FooterTextLink
            href="https://www.linkedin.com/in/oleksandr-khomiak/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Oleksandr Khomiak
          </FooterTextLink>
        </FooterText>
      </FooterContainer>
    </StyledFooter>
  );
};

export default Footer;
