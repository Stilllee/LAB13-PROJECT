/* eslint-disable no-nested-ternary */
import { atom, useRecoilState } from 'recoil';
import { useState, useEffect } from 'react';
import style from './SignUpRegForm.module.css';
import { signUpRequiredState } from '../../@store/signUpRequiredState';
import { signUpEmailState } from '../../@store/signUpEmailState';
import { signUpPasswordState } from '../../@store/signUpPasswordState';

export function SignUpRegForm() {
  const [email, setEmail] = useRecoilState(signUpEmailState);
  const [password, setPassword] = useRecoilState(signUpPasswordState);
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordConfirmError, setPasswordConfirmError] = useState(false);

  const [signUpRequired, setSignUpRequired] =
    useRecoilState(signUpRequiredState);

  const onChangeEmailHandler = e => {
    setEmail(e.target.value);
    setEmailError(false);
  };

  const onChangePasswordHandler = e => {
    setPassword(e.target.value);
    setPasswordError(false);
  };

  const onChangePasswordConfirmonHandler = e => {
    setPasswordConfirm(e.target.value);
    setPasswordConfirmError(false);
  };

  const onBlurEmailHandler = () => {
    if (email === '') {
      setEmailError(true);
    }
  };

  const onBlurPasswordHandler = () => {
    if (password === '') {
      setPasswordError(true);
    } else if (
      !/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[~!@#$%^&*])[a-zA-Z0-9~!@#$%^&*]{8,15}$/.test(
        password,
      )
    ) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };

  const onBlurPasswordConfirmHandler = () => {
    if (passwordConfirm === '') {
      setPasswordConfirmError(true);
    } else if (password !== passwordConfirm) {
      setPasswordConfirmError(true);
    } else {
      setPasswordConfirmError(false);
    }
  };

  useEffect(() => {
    setSignUpRequired(prevState => ({
      ...prevState,
      userEmail: !emailError,
      userPw: !passwordError && password === passwordConfirm,
    }));
  }, [emailError, passwordError, passwordConfirm, setSignUpRequired, password]);

  return (
    <form className={style.form}>
      <div className={style.userEmail}>
        <label htmlFor="userEmail" />
        <input
          required
          type="text"
          id="userEmail"
          placeholder="이메일"
          value={email}
          onChange={onChangeEmailHandler}
          onBlur={onBlurEmailHandler}
        />
        {emailError && <p>입력한 내용이 없어요.</p>}
      </div>
      <div>
        <label htmlFor="userPassword" />
        <input
          required
          type="text"
          id="userPassword"
          placeholder="비밀번호"
          maxLength={15}
          value={password}
          onChange={onChangePasswordHandler}
          onBlur={onBlurPasswordHandler}
        />
        {passwordError ? (
          password === '' ? (
            <p>입력한 내용이 없어요.</p>
          ) : (
            <p>
              영문, 숫자, 특수문자 (~!@#$%^&*) 조합 8~15 자리 로 입력해주세요.
            </p>
          )
        ) : (
          <p>영문, 숫자, 특수문자(~!@#$%^&*) 조합 8~15 자리</p>
        )}
      </div>
      <div>
        <label htmlFor="userPasswordConfirm" />
        <input
          required
          type="text"
          id="userPasswordConfirm"
          placeholder="비밀번호 확인"
          maxLength={15}
          value={passwordConfirm}
          onChange={onChangePasswordConfirmonHandler}
          onBlur={onBlurPasswordConfirmHandler}
        />
        {passwordConfirmError &&
          (passwordConfirm === '' ? (
            <p>입력한 내용이 없어요.</p>
          ) : (
            <p>비밀번호가 일치하지 않습니다.</p>
          ))}
      </div>
    </form>
  );
}
