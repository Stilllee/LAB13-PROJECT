import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import useDataFilter from '../../hooks/useDataFilter';

import 'swiper/swiper.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import style from './MainNavPage.module.css';

export default function UseDataMain() {
  const baseUrl = '../src/assets/images/';
  const FilterData = useDataFilter('main');

  const slides = [
    {
      id: 'slide-1',
      description: '인생 2회차를 사는 판타지 드라마',
      link: '/detailpage',
    },
    {
      id: 'slide-2',
      description: '주말 저녁 온 가족이 함께 즐길 수 있는 웃음 라인업',
      link: '/sample/2',
    },
    {
      id: 'slide-3',
      description: '하루 끝의 술 한잔이 인생의 신념인 본격 기승전술 드라마',
      link: '/sample/3',
    },
    {
      id: 'slide-4',
      description: '유재석, 조세호의 토크쇼&퀴즈쇼 프로그램',
      link: '/sample/4',
    },
  ];

  return (
    <div className={style.container}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        slidesPerView={1}
        spaceBetween={0}
        speed={400}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className={style.swiper}
      >
        {FilterData.map((contents, index) => {
          const slide = slides[index];

          return (
            <SwiperSlide key={contents.id} className={style.swiperSlide}>
              <section className={style.section}>
                <img
                  src={`${baseUrl}${contents.src.main}.jpg`}
                  alt={`${contents.name}`}
                />
              </section>
              {slide && (
                <div className={style.contents}>
                  <p className={style.contents_text}>{slide.description}</p>
                  <a className={style.contents_button} href={slide.link}>
                    자세히 보기
                  </a>
                </div>
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
