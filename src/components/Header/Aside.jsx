import style from '@components/Header/Aside.module.css';
import { useState } from 'react';
import { Search, Profile } from '@components';

export function Aside({ onClickModalHandler }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileHovered, setIsProfileHovered] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(prevState => !prevState);
  };

  const toggleProfileHover = () => {
    setIsProfileHovered(prevState => !prevState);
  };

  const searchButtonClass = isSearchOpen ? style.closeBtn : style.searchBtn;

  return (
    <aside className={style.aside}>
      {isSearchOpen && <Search />}
      <button
        onClick={toggleSearch}
        type="button"
        aria-label="검색"
        className={searchButtonClass}
      />
      <div
        onMouseEnter={toggleProfileHover}
        onMouseLeave={toggleProfileHover}
        className={style.member}
      />
      <Profile
        show={isProfileHovered}
        onClickModalHandler={onClickModalHandler}
        onMouseEnter={toggleProfileHover}
        onMouseLeave={toggleProfileHover}
      />
    </aside>
  );
}
