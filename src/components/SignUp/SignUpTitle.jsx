import style from './SignUpTitle.module.css';

export function SignUpTitle() {
  return (
    <div className={style.signUpTitleWrap}>
      <h3>티빙 회원가입</h3>
      <p>아이디와 이메일로 간편하게 티빙을 시작하세요!</p>
    </div>
  );
}
