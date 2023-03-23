import { array, bool, func } from 'prop-types';
import style from './ProfileMemberList.module.css';

export function ProfileMemberList({
  profileData,
  activePhoto,
  onClickChangeProfileHandler,
}) {
  const baseUrl = '../src/assets/images/';

  return (
    <li className={`${style.profileliwrap} `}>
      <button
        className={activePhoto ? style.profileActivewrap : style.profilewrap}
        type="button"
        onClick={onClickChangeProfileHandler}
      >
        <img
          className={`${style.profileBackground}`}
          src={`${baseUrl}${profileData[1]}.jpg`}
          name={profileData[1]}
          alt=""
        />
      </button>
      <p>{profileData[0]}</p>
    </li>
  );
}

ProfileMemberList.propTypes = {
  profileData: array,
  activePhoto: bool,
  onClickChangeProfileHandler: func,
};
