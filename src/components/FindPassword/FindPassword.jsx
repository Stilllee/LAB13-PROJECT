import { useEffect, useState } from 'react';
import { useResetPassword } from '../../utils/firebase/auth/useResetPassword';
import FindModal from './FindModal';
import style from './FindPassword.module.css';

export default function FindPassword() {
  const [email, setEmail] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);

  const message = {
    success: '해당 이메일로 비밀번호 재설정 이메일을 전송하였습니다.',
    fail: '이메일 정보를 찾을 수 없습니다. 이메일을 다시 입력 해주세요.',
  };

  const { resetPassword, error: errorEmail } = useResetPassword();

  useEffect(() => {
    console.log('최초 errorEmail:', errorEmail);
    if (errorEmail === true) {
      console.log('에러가 있어서 isSuccess 변경');
      console.log('errorEmail:', errorEmail);
      setIsSuccess(false);
    } else if (errorEmail === false) {
      console.log('에러가 없어서 isSuccess 변경');
      console.log('errorEmail:', errorEmail);
      setIsSuccess(true);
    } else {
      console.log('초기세팅');
    }
  }, [errorEmail]);

  useEffect(() => {
    if (isModalOpen) {
      setEmail('');
      setIsVisible(false);
    }
  }, [isModalOpen]);
  const onChangeHandler = e => {
    setEmail(e.target.value);
    setIsVisible(true);
  };

  const onClickHandler = async e => {
    e.preventDefault();
    await resetPassword(email);
    setIsModalOpen(true);
  };

  const onResetHandler = () => {
    setEmail('');
    setIsVisible(false);
  };

  return (
    <div>
      <form className={style.findPassword}>
        <h2 className={style.title}>비밀번호 찾기</h2>
        <p className={style.info}>
          등록된 이메일 주소로 비밀번호 재설정을 위한 인증 메일이 발송됩니다.
          <br /> 이메일을 확인하여 12시간 이내에 비밀번호 재설정을 완료해주세요.
        </p>
        <div className={style.wrapper}>
          <label name="findPassword" htmlFor="findPassword">
            <input
              value={email}
              onChange={onChangeHandler}
              className={style.input}
              id="findPassword"
              type="email"
              placeholder="이메일"
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
          onClick={onClickHandler}
          className={style.button}
          type="submit"
        >
          확인
        </button>
      </form>
      {isModalOpen ? (
        <FindModal
          modalText={isSuccess ? message.success : message.fail}
          closeModal={setIsModalOpen}
        />
      ) : null}
    </div>
  );
}
