import LandingAutoSlide from '@components/LandingSlide/LandingAutoSlide';
import LandingMainSlide from '@components/LandingSlide/LandingMainSlide';
import LandingSlideTitle from '@components/LandingSlide/LandingSlideTitle';
import style from './LandingPage.module.css';

export default function LandingPage() {
  const mainTitle = {
    title: '타잉에만 있는 재미',
    boldText: '오리지널 콘텐츠를 만나보세요!',
    text: '차별화된 웰메이드 오리지널 콘텐츠',
  };
  const autoTitle = {
    title: '내가 찾던 재미',
    boldText: '보고 싶은 콘텐츠를 발견하세요!',
    text: '최신, 인기 TV프로그램, 영화, 해외시리즈, 파라마운트+ 오리지널 및 독점',
  };

  return (
    <main className={style.landing}>
      <LandingSlideTitle
        title={mainTitle.title}
        boldText={mainTitle.boldText}
        text={mainTitle.text}
      />
      <LandingMainSlide />
      <LandingSlideTitle
        title={autoTitle.title}
        boldText={autoTitle.boldText}
        text={autoTitle.text}
      />
      <LandingAutoSlide />
    </main>
  );
}
