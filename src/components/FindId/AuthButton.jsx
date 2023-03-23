import style from './AuthButton.module.css';

export default function AuthButton() {
  const onAuthClickHandler = () => {
    alert('본인 인증이 완료 되었습니다.');
  };

  return (
    <fieldset className={style.auth}>
      <h3 className={style.title}>본인인증으로 찾기</h3>
      <p className={style.info}>
        이미 본인인증이 완료된 계정에 한하여 아이디 찾기가 가능합니다.
      </p>
      <button
        onClick={onAuthClickHandler}
        className={style.button}
        type="button"
      >
        본인인증하기
      </button>
    </fieldset>
  );
}
