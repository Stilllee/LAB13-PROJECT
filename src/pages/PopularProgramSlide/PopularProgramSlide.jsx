import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useEffect, useState } from 'react';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import { Link } from 'react-router-dom';
import 'swiper/swiper.css';
import 'swiper/css/navigation';
import './PopularProgramSlide.css';
import useDataFilter from '../../hooks/useDataFilter';

SwiperCore.use([Navigation, Pagination, A11y]);

export default function PopularProgramSlide() {
  const baseUrl = '../src/assets/images/'; // 경로 설정

  const numberUrl = '../src/assets/images/numbers/';

  const FilterData = useDataFilter('slide');

  return (
    <div className="swiper-title">
      <h2
        style={{ 'margin-left': '44px', 'margin-bottom': '8px' }}
        className="list_title"
      >
        실시간 인기 프로그램
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
        {FilterData?.map((contents, index) => (
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

                <img
                  style={{ 'margin-top': '-24px' }}
                  src={`${numberUrl}${index + 1}.png`}
                  alt="숫자 사진"
                />
                <span
                  className="contentsName"
                  style={{ display: 'inline', margin: 'auto' }}
                >
                  {contents.name}
                </span>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
