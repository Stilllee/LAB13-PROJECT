import { bool, func, string } from 'prop-types';
import { useRef, useState } from 'react';
import style from './SignInInputForm.module.css';

export function SignInInputForm({
  onChangeUserDatadebounce,
  onInputEmailDataHandler,
  onInputPasswordDataHandler,
  setEmailData,
  setPasswordData,
  clearEmailButtonActive,
  setClearEmailButtonActive,
  clearPasswordButtonActive,
  setClearPasswordButtonActive,
}) {
  const clearUserEmailInput = useRef(null);
  const clearUserPasswordInput = useRef(null);
  const [showPassword, isShowPassword] = useState(false);

  const onClickEmailDataClearHandler = () => {
    if (clearUserEmailInput.current.value) {
      clearUserEmailInput.current.value = '';
      setEmailData('');
      setClearEmailButtonActive(false);
    }
  };
  const onClickPasswordDataClearHandler = () => {
    if (clearUserPasswordInput.current.value) {
      clearUserPasswordInput.current.value = '';
      setPasswordData('');
      setClearPasswordButtonActive(false);
    }
  };
  const onClickShowPasswordHandler = () => {
    isShowPassword(!showPassword);
  };

  return (
    <form name="inputform" className={style.inputform}>
      <label htmlFor="userEmail" name="userinput">
        <input
          type="text"
          id="userEmail"
          name="userdata"
          placeholder="아이디"
          maxLength="30"
          ref={clearUserEmailInput}
          // autoComplete="off"
          onInput={onInputEmailDataHandler}
          onChange={onChangeUserDatadebounce}
        />
        {clearEmailButtonActive ? (
          <button
            type="button"
            name="inputemailformbutton"
            onClick={onClickEmailDataClearHandler}
            className={style.iconclose}
          />
        ) : (
          ''
        )}
      </label>
      <label htmlFor="userPassword" name="userinput">
        <input
          type={showPassword ? 'text' : 'password'}
          id="userPassword"
          name="userdata"
          placeholder="비밀번호"
          ref={clearUserPasswordInput}
          // autoComplete="off"
          onInput={onInputPasswordDataHandler}
          onChange={onChangeUserDatadebounce}
        />
        {clearPasswordButtonActive ? (
          <button
            type="button"
            name="inputpasswordformbutton"
            onClick={onClickPasswordDataClearHandler}
            className={style.iconclose}
          />
        ) : (
          ''
        )}
        <button
          type="button"
          name="inputpasswordeyesbutton"
          onClick={onClickShowPasswordHandler}
          className={style.eyes}
        />
      </label>
    </form>
  );
}

SignInInputForm.propTypes = {
  onChangeUserDatadebounce: func,
  onInputEmailDataHandler: func,
  onInputPasswordDataHandler: func,
  setEmailData: func,
  setPasswordData: func,
  clearEmailButtonActive: bool,
  setClearEmailButtonActive: func,
  clearPasswordButtonActive: bool,
  setClearPasswordButtonActive: func,
};
