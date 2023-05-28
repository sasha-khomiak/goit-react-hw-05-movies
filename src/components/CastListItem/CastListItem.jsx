import React from 'react';
// import PropTypes from 'prop-types';

import noActorPhoto from '../../images/noActorPhoto.jpg';

const CastListItem = ({ actor }) => {
  let actorPhoto = noActorPhoto;
  if (actor.profile_path) {
    actorPhoto = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;
  }

  return (
    <li>
      <div>
        <img src={actorPhoto} alt="preview" />
      </div>
      <div>{actor.name}</div>
    </li>
  );
};

// CastListItem.propTypes = {};

export default CastListItem;
