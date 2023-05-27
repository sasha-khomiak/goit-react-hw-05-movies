// import React from 'react'
// import PropTypes from 'prop-types'
import { useState } from 'react';

const Searchbar = ({ onSubmit }) => {
  // стейт для контролю інпута
  const [query, setQuery] = useState('');

  //при зміні значення інпута перезаписуємо внутрішній стейт
  const handleChangeInput = event => {
    setQuery(event.currentTarget.value);
  };

  // при сабміті форми перевіряєм чи не порожній рядок в стейт
  // і відправляємо запит у загальний стейт і очищаємо форму
  const onSubmitForm = event => {
    event.preventDefault();
    if (query.trim() === '') {
      setQuery('');
      return;
    }
    onSubmit(query.trim());
    setQuery('');
  };

  return (
    <form onSubmit={onSubmitForm}>
      <button type="submit">
        <span>Search movie</span>
      </button>

      <input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        value={query}
        onChange={handleChangeInput}
      />
    </form>
  );
};

// SearchForm.propTypes = {}

export default Searchbar;
