/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import style from '@components/Header/Profile.module.css';
import { Link } from 'react-router-dom';

export function Profile({
  show,
  onMouseEnter,
  onMouseLeave,
  onClickModalHandler,
}) {
  const onClickLogout = () => {
    onClickModalHandler();
  };

  const profileClass = `${style.my} ${show ? '' : style.hidden}`;

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={profileClass}
    >
      <div className={style.profile}>
        <div className={style.image} />
        <div className={style.info}>
          <p className={style.name}>닉네임</p>
          <Link to="/profiles" className={style.site}>
            프로필 전환 &gt;
          </Link>
        </div>
      </div>
      <hr />
      <ul className={style.menu}>
        <li>MY</li>
        <li>이용권</li>
        <li>쿠폰등록</li>
        <li>고객센터</li>
        <li onClick={onClickLogout}>로그아웃</li>
      </ul>
    </div>
  );
}
