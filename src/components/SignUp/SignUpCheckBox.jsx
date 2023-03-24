/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-expressions */
import { useState, useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { signUpRequiredState } from '../../@store/signUpRequiredState';
import style from './SignUpCheckBox.module.css';

const checkService = {
  checkOptAge: '만 14세 이상입니다.',
  checkServiceReq01: '[필수] 서비스 이용약관 동의',
  checkServiceReq02: '[필수] 개인정보 수집 및 서비스 활용 동의',
  checkServiceReq03: '[필수] 채널 홈페이지 개인정보 제 3자 제공동의',
  checkServiceOpt04: '[선택] 개인정보 제 3자 제공동의',
  checkServiceOpt05: '[선택] 개인정보 수집 및 서비스 활용 동의',
  checkServiceOpt06: '[선택] 마케팅 정보 SMS 수신동의',
  checkServiceOpt07: '[선택] 마케팅 정보 이메일 수신동의',
};

const checkServiceKey = Object.keys(checkService);

export function SignUpCheckBox() {
  const [requiredState, setRequiredState] = useRecoilState(signUpRequiredState);
  const [checkServiceList, setCheckServiceList] = useState([]);
  useEffect(() => {
    // console.log('requiredState : ', requiredState);
  }, []);

  const onChangeCheckAllHandler = e => {
    const isAllChecked = e.target.checked;
    if (isAllChecked) {
      setCheckServiceList(checkServiceKey);
      setRequiredState(current => ({
        ...current,
        checkServiceReq01: true,
        checkServiceReq02: true,
        checkServiceReq03: true,
      }));
    } else {
      setCheckServiceList([]);
      setRequiredState(current => ({
        ...current,
        checkServiceReq01: false,
        checkServiceReq02: false,
        checkServiceReq03: false,
      }));
    }
  };

  const onChangeCheckServiceHandler = e => {
    const CheckServiceReqName = e.target.name;
    const CheckServiceReqId = e.target.id;
    e.target.checked
      ? setCheckServiceList([...checkServiceList, e.target.id])
      : setCheckServiceList(
          checkServiceList.filter(remain => remain !== e.target.id),
        );
    if (
      CheckServiceReqName === 'checkServiceReq' &&
      e.target.checked === true
    ) {
      setRequiredState(current => ({
        ...current,
        [CheckServiceReqId]: true,
      }));
    } else if (
      CheckServiceReqName === 'checkServiceReq' &&
      e.target.checked === false
    ) {
      setRequiredState(current => ({
        ...current,
        [CheckServiceReqId]: false,
      }));
    }
  };

  return (
    <div className={style.checkboxWrap}>
      <div className={style.checkAll}>
        <input
          type="checkbox"
          id="checkAll"
          onChange={onChangeCheckAllHandler}
          checked={checkServiceList.length === 8}
        />
        <label htmlFor="checkAll">모두 동의합니다.</label>
      </div>
      <ul>
        <li>
          <input
            type="checkbox"
            id="checkOptAge"
            name="checkService"
            checked={checkServiceList.includes('checkOptAge')}
            onChange={onChangeCheckServiceHandler}
          />
          <label htmlFor="checkOptAge ">{checkService.checkOptAge}</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="checkServiceReq01"
            name="checkServiceReq"
            checked={checkServiceList.includes('checkServiceReq01')}
            onChange={onChangeCheckServiceHandler}
          />
          <label htmlFor="checkServiceReq01 ">
            {checkService.checkServiceReq01}
          </label>
        </li>
        <li>
          <input
            type="checkbox"
            id="checkServiceReq02"
            name="checkServiceReq"
            checked={checkServiceList.includes('checkServiceReq02')}
            onChange={onChangeCheckServiceHandler}
          />
          <label htmlFor="checkServiceReq02">
            {checkService.checkServiceReq02}
          </label>
        </li>
        <li>
          <input
            type="checkbox"
            id="checkServiceReq03"
            name="checkServiceReq"
            checked={checkServiceList.includes('checkServiceReq03')}
            onChange={onChangeCheckServiceHandler}
          />
          <label htmlFor="checkServiceReq03">
            {checkService.checkServiceReq03}
          </label>
        </li>
        <li>
          <input
            type="checkbox"
            id="checkServiceOpt04"
            name="checkService"
            checked={checkServiceList.includes('checkServiceOpt04')}
            onChange={onChangeCheckServiceHandler}
          />
          <label htmlFor="checkServiceOpt04">
            {checkService.checkServiceOpt04}
          </label>
        </li>
        <li>
          <input
            type="checkbox"
            id="checkServiceOpt05"
            name="checkService"
            checked={checkServiceList.includes('checkServiceOpt05')}
            onChange={onChangeCheckServiceHandler}
          />
          <label htmlFor="checkServiceOpt05">
            {checkService.checkServiceOpt05}
          </label>
        </li>
        <li className={style.subUi}>
          <input
            type="checkbox"
            id="checkServiceOpt06"
            name="checkService"
            checked={checkServiceList.includes('checkServiceOpt06')}
            onChange={onChangeCheckServiceHandler}
          />
          <label htmlFor="checkServiceOpt06">
            {checkService.checkServiceOpt06}
          </label>
        </li>
        <li className={style.subUi}>
          <input
            type="checkbox"
            id="checkServiceOpt07"
            name="checkService"
            checked={checkServiceList.includes('checkServiceOpt07')}
            onChange={onChangeCheckServiceHandler}
          />
          <label htmlFor="checkServiceOpt07">
            {checkService.checkServiceOpt07}
          </label>
        </li>
      </ul>
    </div>
  );
}
