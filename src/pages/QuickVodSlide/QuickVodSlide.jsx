import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useEffect, useState } from 'react';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import { Link } from 'react-router-dom';
import 'swiper/swiper.css';
import 'swiper/css/navigation';
// 커밋 내용 컨텐츠 호버했을때 살짝 튀어나오는 효과 및 왼쪽하단에 해당 컨텐츠 상세페이지 링크 출력 #16
import useDataFilter from '../../hooks/useDataFilter';

SwiperCore.use([Navigation, Pagination, A11y]);

export default function QuickVodSlide() {
  const baseUrl = '../src/assets/images/'; // 경로 설정

  const FilterData = useDataFilter('quickslide');
  return (
    <div className="swiper-title">
      <h2
        style={{ 'margin-left': '44px', 'margin-bottom': '8px' }}
        className="list_title"
      >
        Quick VOD
      </h2>

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
                to={`${contents.src.quickslide}/${contents.id}`}
                style={{ textDecoration: 'none' }}
              >
                <img
                  src={`${baseUrl}${contents.src.quickslide}.jpg`}
                  alt={`${contents.name}`}
                />
                <p className="contentsName">{contents.name}</p>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
