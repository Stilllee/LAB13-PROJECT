import { array, object } from 'prop-types';
import { useEffect } from 'react';
import { ProfileMemberList } from '@components';
import { useRecoilState } from 'recoil';
import { profileActive } from '../../@store/profileActive';
import style from './ProfileMembers.module.css';
import { useNavigate } from 'react-router';

export function ProfileMembers({
  profileData1,
  profileData2,
  profileData3,
  profileData4,
  profileData5,
}) {
  const [activePhoto, isActivePhoto] = useRecoilState(profileActive);
  const movePage = useNavigate();
  const onClickChangeProfileHandler = e => {
    const profileName = e.target.name;

    switch (profileName) {
      case 'taing01':
        isActivePhoto(() => ({
          profile01: true,
          profile02: false,
          profile03: false,
          profile04: false,
          profile05: false,
        }));
        break;

      case 'taing02':
        isActivePhoto(() => ({
          profile01: false,
          profile02: true,
          profile03: false,
          profile04: false,
          profile05: false,
        }));
        break;

      case 'taing03':
        isActivePhoto(() => ({
          profile01: false,
          profile02: false,
          profile03: true,
          profile04: false,
          profile05: false,
        }));
        break;

      case 'taing04':
        isActivePhoto(() => ({
          profile01: false,
          profile02: false,
          profile03: false,
          profile04: true,
          profile05: false,
        }));
        break;

      case 'taing05':
        isActivePhoto(() => ({
          profile01: false,
          profile02: false,
          profile03: false,
          profile04: false,
          profile05: true,
        }));
        break;
    }

    // 페이지 이동
    // movePage('/test');
    console.log('버튼클릭 종료');
  };

  return (
    <>
      <div className={style.photowrap}>
        <ul className={style.photocontainer}>
          <ProfileMemberList
            profileData={profileData1}
            activePhoto={activePhoto.profile01}
            onClickChangeProfileHandler={onClickChangeProfileHandler}
          />
          <ProfileMemberList
            profileData={profileData2}
            activePhoto={activePhoto.profile02}
            onClickChangeProfileHandler={onClickChangeProfileHandler}
          />
          <ProfileMemberList
            profileData={profileData3}
            activePhoto={activePhoto.profile03}
            onClickChangeProfileHandler={onClickChangeProfileHandler}
          />
          <ProfileMemberList
            profileData={profileData4}
            activePhoto={activePhoto.profile04}
            onClickChangeProfileHandler={onClickChangeProfileHandler}
          />
          <ProfileMemberList
            profileData={profileData5}
            activePhoto={activePhoto.profile05}
            onClickChangeProfileHandler={onClickChangeProfileHandler}
          />
        </ul>
      </div>
      <div className={style.buttonwrap}>
        <button className={style.buttonmodify} type="button">
          프로필 편집
        </button>
        {/* <button className={style.buttoncomplete} type="button">
          완료
        </button> */}
      </div>
    </>
  );
}

ProfileMembers.propTypes = {
  profileData1: array,
  profileData2: array,
  profileData3: array,
  profileData4: array,
  profileData5: array,
};
