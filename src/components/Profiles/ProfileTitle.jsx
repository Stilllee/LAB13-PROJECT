import style from './ProfileTitle.module.css';

export function ProfileTitle() {
  return (
    <div className={style.titlewrap}>
      <h3 className={style.titlehead}>
        프로필 선택
        <p>시청할 프로필을 선택해주세요.</p>
      </h3>
    </div>
  );
}
