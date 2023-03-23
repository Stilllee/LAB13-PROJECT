import style from '@components/Header/Menu.module.css';

export function Menu() {
  return (
    <ul className={style.menu}>
      <li className={style.live}>실시간</li>
      <li>TV프로그램</li>
      <li className={style.movie}>영화</li>
      <li className={style.paramount} />
    </ul>
  );
}
