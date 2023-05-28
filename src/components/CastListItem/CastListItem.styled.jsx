import styled from 'styled-components';

// картка актора
export const ActorCard = styled.li`
  /* width: 100%; */
  width: calc((100% - 10px) / 2);
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
  }

  /*----Базовий стиль для мобілки 480-767 (адаптивний)----*/
  @media screen and (min-width: 480px) {
    width: calc((100% - 10px) / 2);
  }

  /*----Стиль для планшета 768-1200----*/

  @media screen and (min-width: 768px) {
    width: calc((100% - 30px) / 4);
  }

  /*----Стиль для компа від 1200----*/

  @media screen and (min-width: 1200px) {
    width: calc((100% - 50px) / 6);
  }
`;

// обгортка фотокартки
export const PhotoCardWrap = styled.div`
  position: relative;
  overflow: hidden;
`;

// фотка актора (прибираємо 4 пікселі внизу)
export const Img = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
`;

// всплавна плашка
export const CardSlider = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  justify-content: center;
  top: 0;
  left: 0;
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;

  background-color: rgba(255, 107, 23, 0.8);
  height: 100%;

  transform: translateY(100%);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  ${ActorCard}:hover & {
    transform: translateY(0%);
  }
`;

// роль в фільмі показується на вспливній плашці
export const CharacterText = styled.p`
  font-size: 16px;
  line-height: calc(28 / 18);
  letter-spacing: 0.03em;
  color: white;
  text-align: center;
`;

// блок у який огорнуте імʼя актора
export const NameBlock = styled.div`
  padding: 10px 20px;
`;

// імʼя актора
export const NameText = styled.div`
  font-weight: bold;
  text-align: center;
  font-size: 14px;
  line-height: 1.3;
  letter-spacing: 0.06em;

  color: rgba(255, 107, 23, 1);
`;
