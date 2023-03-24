import { useRecoilState, useRecoilValue } from 'recoil';
import { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { signUpRequiredState } from '../../@store/signUpRequiredState';
import { signUpEmailState } from '../../@store/signUpEmailState';
import { signUpPasswordState } from '../../@store/signUpPasswordState';
import { useSignUp } from '../../utils/firebase/auth';
import style from './SignUpButton.module.css';

export function SignUpButton({ email, password }) {
  const [requiredState] = useRecoilState(signUpRequiredState);
  const [buttonActive, setButtonActive] = useState(true);

  const userEmail = useRecoilValue(signUpEmailState);
  const userPassword = useRecoilValue(signUpPasswordState);

  const onSignUp = async () => {
    const auth = getAuth();
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        userEmail,
        userPassword,
      );
      console.log(result);
    } catch (err) {
      console.error(err);
    }
  };

  const isReqTrue = Req => Req === true;

  useEffect(() => {
    const requiredStateValues = Object.values(requiredState);
    if (requiredStateValues.every(isReqTrue)) setButtonActive(false);
    else setButtonActive(true);
  }, [requiredState]);

  return (
    <div className={style.signUpBtn}>
      <button
        className={style.btn}
        type="button"
        disabled={buttonActive}
        onClick={onSignUp}
      >
        가입하기
      </button>
    </div>
  );
}
