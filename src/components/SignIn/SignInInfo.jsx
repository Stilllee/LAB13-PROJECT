import { useNavigate } from 'react-router-dom';
import style from './SignInInfo.module.css';

export function SignInInfo() {

  const movepage = useNavigate();
  
  const onClickLoginMoveHandler = () => {
    movepage('/findid');
  }

  const onClickPasswordMoveHandler = () => {
    movepage('/findpassword');
  }

  const onClickSignUpMoveHandler = () => {
    movepage('/signup');
  }

  return (
    <>
      <div className={style.infoJoin}>
        <a className={style.infohover} onClick={onClickLoginMoveHandler}>
          아이디 찾기
        </a>
        <a className={style.infohover} onClick={onClickPasswordMoveHandler}>
          비밀번호 찾기
        </a>
      </div>
      <div className={style.infoSignUp}>
        <p className={style.noticeSignup}>아직 계정이 없으신가요?</p>
        <a className={style.infohover} onClick={onClickSignUpMoveHandler}>
          회원가입하기
        </a>
      </div>
    </>
  );
}
