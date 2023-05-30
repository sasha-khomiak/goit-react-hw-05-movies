// бібліотека перевірки пропсів
import PropTypes from 'prop-types';

// бібліотека для стейтів на хуках для контрольованого інпута
import { useState } from 'react';

//  стиліщовані компоненти
import { Form, SearchBtn, BtnIcon, Input } from './Searchbar.styled';

// імпорт свг картинки лупи для кнопки пошуку
import SearchImg from '../../images/search-loop.svg';

// компонент сьорчбар
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

  // верстка форми
  // окрема цікавісь до компонента BtnIcon він стилізований і особливо працює з свг (див стиліщовний файл)
  return (
    <Form onSubmit={onSubmitForm}>
      <SearchBtn type="submit">
        <BtnIcon src={SearchImg} />
        <span role="img" aria-label="search movie"></span>
      </SearchBtn>

      <Input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies..."
        value={query}
        onChange={handleChangeInput}
      />
    </Form>
  );
};

// перевірка пропсів
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
