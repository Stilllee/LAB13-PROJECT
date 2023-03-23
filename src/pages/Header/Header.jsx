import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import style from '@pages/Header/Header.module.css';
import { Menu, Aside } from '@components';

function Header({ onClickModalHandler }) {
  return (
    <div className={style.header}>
      <NavLink className={style.logo} to="/main" />
      <Menu />
      <Aside onClickModalHandler={onClickModalHandler} />
    </div>
  );
}

export default Header;
