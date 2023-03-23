import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useEffect, useState } from 'react';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import { Link } from 'react-router-dom';
import 'swiper/swiper.css';
import 'swiper/css/navigation';
import useDataFilter from '../../hooks/useDataFilter';

SwiperCore.use([Navigation, Pagination, A11y]);

export default function EventSlide() {
  const baseUrl = '../src/assets/images/'; // 경로 설정
  const FilterData = useDataFilter('smallbanner');

  return (
    <>
      <div>
        <h2
          style={{ 'margin-left': '44px', 'margin-bottom': '8px' }}
          className="list_title"
        >
          이벤트
        </h2>
      </div>

      <Swiper
        style={{
          'margin-bottom': '36px',
          'margin-left': '44px',
          'padding-top': '10px',
        }}
        spaceBetween={10}
        slidesPerView={5.2}
        slidesPerGroup={5}
        navigation
      >
        {FilterData?.map(contents => (
          <SwiperSlide key={contents.id}>
            <div>
              <Link to={`${contents.src.smallbanner}/${contents.id}`}>
                <img
                  src={`${baseUrl}${contents.src.smallbanner}.jpg`}
                  alt={`${contents.name}`}
                />
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
