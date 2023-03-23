import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useEffect, useState } from 'react';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import { Link } from 'react-router-dom';
import 'swiper/swiper.css';
import 'swiper/css/navigation';
import QuickVodSlide from '../QuickVodSlide/QuickVodSlide';
import PopularProgramSlide from '../PopularProgramSlide/PopularProgramSlide';
import LiveChannel from '../LiveChannel/LiveChannel';
import OnlyTaing from '../OnlyTaing/OnlyTaing';
import Advertisement from '../Advertisement/Advertisement';
import EventSlide from '../EventSlide/EventSlide';
import useDataFilter from '../../hooks/useDataFilter';
import './MainPageSlide.css';

SwiperCore.use([Navigation, Pagination, A11y]);

export default function MainPageSlide() {
  const baseUrl = '../src/assets/images/'; // 경로 설정

  const FilterData = useDataFilter('slide');

  return (
    <div className="swiper-title">
      <h2
        style={{
          'margin-left': '44px',
          'margin-bottom': '8px',
          width: '375px',
        }}
        className="list_title"
      >
        티빙에서 꼭 봐야하는 콘텐츠
      </h2>

      <Swiper
        style={{
          'margin-bottom': '36px',
          'margin-left': '44px',
          'padding-top': '10px',
        }}
        spaceBetween={10}
        slidesPerView={7.4}
        slidesPerGroup={6}
        navigation
      >
        {FilterData?.map(contents => (
          <SwiperSlide key={contents.id}>
            <div>
              <Link
                to={`${contents.src.slide}/${contents.id}`}
                style={{ textDecoration: 'none' }}
              >
                <img
                  src={`${baseUrl}${contents.src.slide}.jpg`}
                  alt={`${contents.name}`}
                />
                <p className="contentsName">{contents.name}</p>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <QuickVodSlide />
      <PopularProgramSlide />
      <LiveChannel />
      <OnlyTaing />
      <Advertisement />
      <EventSlide />
    </div>
  );
}
