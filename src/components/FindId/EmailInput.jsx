import { useRecoilState } from 'recoil';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './EmailInput.module.css';
import { loginInfo } from '../../@store/loginInfo';

export default function EmailInput() {
  const [email, setEmail] = useRecoilState(loginInfo);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  const navigateToFindIdResult = () => {
    navigate('/findidresult');
  };
  const onChangeHandler = e => {
    setEmail(e.target.value);
    setIsVisible(true);
  };
  const onResetHandler = () => {
    setEmail('');
    setIsVisible(false);
  };
  return (
    <fieldset className={style.email}>
      <h3 className={style.title}>이메일로 찾기</h3>
      <p className={style.info}>가입 시 등록한 이메일을 입력해주세요.</p>
      <div className={style.wrapper}>
        <label htmlFor="findId" name="email">
          <input
            value={email}
            onChange={onChangeHandler}
            id="email"
            type="email"
            placeholder="이메일"
            className={style.input}
            required
          />
        </label>
        {isVisible && (
          <button
            aria-label="초기화 버튼"
            className={style.reset}
            onClick={onResetHandler}
            type="button"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 15 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.0604 11.5464L8.51543 7.00141L13.0604 2.45641L11.5454 0.941406L7.00043 5.48641L2.45543 0.941406L0.94043 2.45641L5.48543 7.00141L0.94043 11.5464L2.45543 13.0614L7.00043 8.51641L11.5469 13.0614L13.0604 11.5464Z"
                fill="black"
              />
            </svg>
          </button>
        )}
      </div>
      <button
        disabled={!isVisible}
        onClick={navigateToFindIdResult}
        className={style.button}
        type="submit"
      >
        확인
      </button>
    </fieldset>
  );
}
