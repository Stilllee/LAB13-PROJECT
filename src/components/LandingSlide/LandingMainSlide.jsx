import { useLayoutEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Keyboard, A11y } from 'swiper';
import './LandingMainSlide.css';
import 'swiper/css';
import useDataFilter from '../../hooks/useDataFilter';

export default function LandingMainSlide() {
  const DataFilter = useDataFilter('rendingfunny');
  const [datas, setDatas] = useState([]);

  useLayoutEffect(() => {
    DataFilter.splice(5, 3);
    DataFilter.splice(1, 1);
    setDatas(DataFilter);
  }, [DataFilter]);
  return (
    <section className="slideContainer">
      <Swiper
        style={{ height: '583px' }}
        slidesPerView="auto"
        spaceBetween={0}
        centeredSlides
        mousewheel
        keyboard={{
          enabled: true,
        }}
        modules={[Mousewheel, Keyboard, A11y]}
        className="mySwiper"
        onSlideChange={() => {
          Swiper.releaseOnEdges = false;
        }}
        onReachEnd={() => {
          Swiper.releaseOnEdges = true;
        }}
      >
        {datas.map(contents => {
          const baseUrl = '../src/assets/images/';
          const src = `${baseUrl}${contents.src.rendingfunny}.jpg`;
          const style = { marginLeft: '24px' };

          return (
            <SwiperSlide key={contents.id} style={style}>
              <div className="imgWrapper">
                <img className={style.img} src={src} alt={`${contents.name}`} />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
