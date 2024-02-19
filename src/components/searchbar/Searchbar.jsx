import React from 'react';
import css from './Searchbar.module.css';

const Searchbar = ({ onSubmit }) => {
  return (
    <div className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={onSubmit}>
        <button type="submit">
          <span class="button-label">Search</span>
        </button>

        <input
          class="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </div>
  );
};
export default Searchbar;
