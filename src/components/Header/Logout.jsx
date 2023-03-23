/* eslint-disable react/no-unknown-property */
import style from '@components/Header/Logout.module.css';

function Logout(props) {
  const onClickConfirmHandler = () => {
    props.onConfirm(() => {
      const history = createBrowserHistory();
      history.push('/onboarding');
    });
  };

  const onClickCancelHandler = () => {
    props.onCancel();
  };

  return (
    <div className={style.container}>
      <div className={style.background}>
        <div className={style.box}>
          <p className={style.text}>로그아웃 하시겠습니까?</p>
          <div className={style.buttonBox}>
            <button
              className={style.btn}
              type="button"
              onClick={onClickConfirmHandler}
            >
              확인
            </button>
            <span className={style.line}>|</span>
            <button
              className={style.btn}
              type="button"
              onClick={onClickCancelHandler}
            >
              취소
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logout;
