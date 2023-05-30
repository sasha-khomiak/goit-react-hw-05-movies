// бібліотека перевірки проп тайпів
import PropTypes from 'prop-types';

// фото, якщо з бекенда не прийшла фотка актора
import noActorPhoto from '../../images/noActorPhoto.jpg';

// стилізовані компоненти
import {
  ActorCard,
  PhotoCardWrap,
  Img,
  CardSlider,
  CharacterText,
  NameBlock,
  NameText,
} from './CastListItem.styled';

// Компонент CastListItem
const CastListItem = ({ actor }) => {
  //створюєм дінк на фото, якщо з бекенда прийде фотка, то перезаписуємо на нову
  let actorPhoto = noActorPhoto;
  if (actor.profile_path) {
    actorPhoto = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;
  }

  // оформлення картки актора
  return (
    <ActorCard>
      <PhotoCardWrap>
        <Img src={actorPhoto} alt={actor.name} />
        <CardSlider>
          <CharacterText>{actor.character}</CharacterText>
        </CardSlider>
      </PhotoCardWrap>

      <NameBlock>
        <NameText>{actor.name}</NameText>
      </NameBlock>
    </ActorCard>
  );
};

// перевірка проп тайпів
CastListItem.propTypes = {
  actor: PropTypes.object.isRequired,
};

export default CastListItem;
