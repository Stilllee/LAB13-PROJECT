import {
  SignInTitle,
  SignInButton,
  SignInInfo,
  SignInInputForm,
} from '@components';

import { useState, useEffect, useCallback } from 'react';
import { debounce } from '../../utils/debounce';
import style from './SignInSection.module.css';

export function SignInSection() {
  const [emailData, setEmailData] = useState('');
  const [passwordData, setPasswordData] = useState('');
  const [clearEmailButtonActive, setClearEmailButtonActive] = useState(false);
  const [clearPasswordButtonActive, setClearPasswordButtonActive] =
    useState(false);

  const onChangeUserDataHandler = e => {
    const DataId = e.target.id;
    const Data = e.target.value;
    if (DataId === 'userEmail') {
      setEmailData(Data);
    } else if (DataId === 'userPassword') {
      setPasswordData(Data);
    }
  };

  const onChangeUserDatadebounce = useCallback(
    debounce(onChangeUserDataHandler),
    [],
  );

  const onInputEmailDataHandler = e => {
    e.target.value = e.target.value.replace(/[^A-Za-z0-9@\.]/gi, '');
    if (e.target.value) {
      setClearEmailButtonActive(true);
    } else setClearEmailButtonActive(false);
  };

  const onInputPasswordDataHandler = e => {
    if (e.target.value) {
      setClearPasswordButtonActive(true);
    } else setClearPasswordButtonActive(false);
  };

  return (
    <section className={style.signInSection}>
      <div className={style.signInContentWrap}>
        <SignInTitle />
        <SignInInputForm
          onInputEmailDataHandler={onInputEmailDataHandler}
          onInputPasswordDataHandler={onInputPasswordDataHandler}
          onChangeUserDatadebounce={onChangeUserDatadebounce}
          clearEmailButtonActive={clearEmailButtonActive}
          clearPasswordButtonActive={clearPasswordButtonActive}
          setEmailData={setEmailData}
          setPasswordData={setPasswordData}
          setClearEmailButtonActive={setClearEmailButtonActive}
          setClearPasswordButtonActive={setClearPasswordButtonActive}
        />
        <SignInButton emailData={emailData} passwordData={passwordData} />
        <SignInInfo />
      </div>
    </section>
  );
}
