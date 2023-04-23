import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import PropTypes from 'prop-types';
import {
  Styledbar,
  SearchForm,
  Searchbutton,
  Searchinput,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const [inputStr, setInputStr] = useState('');

  const handleSubmit = ev => {
    ev.preventDefault();
    onSubmit(inputStr);
  };

  const handleOnChange = ev => setInputStr(ev.target.value);

  return (
    <Styledbar>
      <SearchForm>
        <Searchbutton type="submit" onClick={handleSubmit}>
          <span>
            <FaSearch />
          </span>
        </Searchbutton>

        <Searchinput
          className="input"
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleOnChange}
        />
      </SearchForm>
    </Styledbar>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
