import { useNavigate } from 'react-router';
import style from '@components/Header/Aside.module.css';
import { useRecoilState } from 'recoil';
import { useState } from 'react';
import { Search, Profile } from '@components';
import { searchOpen } from '../../@store/searchOpen';
import SearchForm from '@pages/SearchForm/SearchForm';


export function Aside({ onClickModalHandler }) {
  const movePage = useNavigate();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileHovered, setIsProfileHovered] = useState(false);
  const [realSearchOpen, setRealSearchOpen] = useRecoilState(searchOpen);

  const toggleSearch = () => {
    setIsSearchOpen(prevState => !prevState);
    setRealSearchOpen(isSearchOpen);
  };

  const toggleProfileHover = () => {
    setIsProfileHovered(prevState => !prevState);
  };

  const searchButtonClass = isSearchOpen ? style.closeBtn : style.searchBtn;

  return (
    <aside className={style.aside}>
      {/* {isSearchOpen && <SearchForm />} */}
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
