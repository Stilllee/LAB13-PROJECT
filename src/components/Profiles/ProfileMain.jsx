import { useEffect, useState } from 'react';
import { ProfileTitle, ProfileMembers } from '@components';
import { useReadData } from '../../utils/firebase/firestore/index';
import style from './ProfileMain.module.css';

export function ProfileMain() {
  const { readData, data, isLoading, error } = useReadData('users');
  const [profileData1, setProfileData1] = useState([]);
  const [profileData2, setProfileData2] = useState([]);
  const [profileData3, setProfileData3] = useState([]);
  const [profileData4, setProfileData4] = useState([]);
  const [profileData5, setProfileData5] = useState([]);

  useEffect(() => {
    (async () => {
      if (!data) {
        await readData();
      }
    })();

    // 향후 로그인 한 유저의 id와 users의 id를 비교하여 일치하는 데이터를 가지고 온다.
    if (data) {
      const objData = data[0].profilename;
      console.log('objData : ', objData);

      for (const key in objData) {
        const profileData = [];
        profileData.push(objData[key].name);
        profileData.push(objData[key].img);
        switch (objData[key].img) {
          case 'taing01':
            setProfileData1(profileData);
            break;
          case 'taing02':
            setProfileData2(profileData);
            break;
          case 'taing03':
            setProfileData3(profileData);
            break;
          case 'taing04':
            setProfileData4(profileData);
            break;
          case 'taing05':
            setProfileData5(profileData);
            break;
        }
      }

      // setProfileData(objData.profilename);
    }
  }, [data, readData]);

  return (
    <section className={style.layout__profile}>
      <div className={style.contents}>
        <ProfileTitle />
        <ProfileMembers
          profileData1={profileData1}
          profileData2={profileData2}
          profileData3={profileData3}
          profileData4={profileData4}
          profileData5={profileData5}
        />
      </div>
    </section>
  );
}
