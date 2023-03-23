import style from '@pages/Footer/Footer.module.css';
import { SnsIcon, CopyRightContents, LinkAtag, TopInfo } from '@components';
import { useRecoilState } from 'recoil';
import LoginState from '../../@store/LoginState';

function Footer() {
  const iconList = {
    youtube: 'youtube',
    twitter: 'twitter',
    facebook: 'facebook',
    instagram: 'instagram',
  };

  const iconSrc = {
    youtube: 'https://www.youtube.com/',
    twitter: 'https://twitter.com/?lang=ko',
    facebook: 'https://www.facebook.com/',
    instagram: 'https://www.instagram.com/',
  };

  const navList = [
    '고객센터',
    '이용약관',
    '개인정보처리방침',
    '청소년 보호정책',
    '법적고지',
    '이벤트',
    '인재채용',
  ];

  const [loginState, setLoginState] = useRecoilState(LoginState);

  const onClickToggleHandler = () => {
    setLoginState(!loginState);
  };

  return (
    <>
      <footer className={`${style.Footer} ${style.gray500}`}>
        <section className={style.contents}>
          {loginState && <TopInfo />}
          <nav className={`${style.nav} ${style.gray200}`}>
            {navList.map((name, index) => {
              return <LinkAtag key={index} name={name} />;
            })}
          </nav>
          <div className={style.copyright}>
            <CopyRightContents />
          </div>
          <div className={style.snsicon}>
            <SnsIcon name={iconList.youtube} src={iconSrc.youtube} />
            <SnsIcon name={iconList.instagram} src={iconSrc.instagram} />
            <SnsIcon name={iconList.twitter} src={iconSrc.twitter} />
            <SnsIcon name={iconList.facebook} src={iconSrc.facebook} />
          </div>
          <p>Copyright © 주식회사 티빙 All right reserved.</p>
        </section>
      </footer>
      <button type="button" onClick={onClickToggleHandler}>
        Login State Test
      </button>
    </>
  );
}

export default Footer;
