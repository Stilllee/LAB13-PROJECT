import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useEffect, useState } from 'react';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import { Link } from 'react-router-dom';
import 'swiper/swiper.css';
import 'swiper/css/navigation';
import useDataFilter from '../../hooks/useDataFilter';

SwiperCore.use([Navigation, Pagination, A11y]);

export default function LiveChannel() {
  const baseUrl = '../src/assets/images/'; // 경로 설정

  const FilterData = useDataFilter('live');

  return (
    <>
      <div>
        <h2
          style={{ 'margin-left': '44px', 'margin-bottom': '8px' }}
          className="list_title"
        >
          인기 LIVE 채널
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
              <Link
                to={`${contents.src.live}/${contents.id}`}
                style={{ textDecoration: 'none' }}
              >
                <img
                  src={`${baseUrl}${contents.src.live}.jpg`}
                  alt={`${contents.name}`}
                />
                <p className="contentsName">{contents.name}</p>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
