import React from 'react';
import css from './Button.module.css';

const Button = ({ onHandleNextPage }) => {
  return (
    <button className={css.Button} type="button" onClick={onHandleNextPage}>
      Load more
    </button>
  );
};

export default Button;
