import style from './SignInInfo.module.css';

export function SignInInfo() {
  return (
    <>
      <div className={style.infoJoin}>
        <a className={style.infohover} href="#section">
          아이디 찾기
        </a>
        <a className={style.infohover} href="#section">
          비밀번호 찾기
        </a>
      </div>
      <div className={style.infoSignUp}>
        <p className={style.noticeSignup}>아직 계정이 없으신가요?</p>
        <a className={style.infohover} href="#section">
          회원가입하기
        </a>
      </div>
    </>
  );
}
