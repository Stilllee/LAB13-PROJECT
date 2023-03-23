import React from 'react';
import banner from '../../assets/images/bigbanner_03.jpg';

export default function Advertisement() {
  return (
    <div style={{ 'margin-left': '40px' }}>
      <img src={banner} alt="이미지 사진" />
    </div>
  );
}
