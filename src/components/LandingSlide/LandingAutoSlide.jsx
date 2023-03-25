import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import style from './LandingAutoSlide.module.css';
import AutoSlide from './AutoSlide';

export default function LandingAutoSlide() {
  const firstSlid = useRef();
  const lastSlide = useRef();

  useLayoutEffect(() => {
    gsap.to(firstSlid.current, {
      duration: 30,
      ease: 'none',
      x: '-2400',
      repeat: -1,
    });
    gsap.to(lastSlide.current, {
      duration: 20,
      ease: 'none',
      x: '-2400',
      repeat: -1,
    });
  }, []);

  return (
    <div className={style.slidewrap}>
      <div className={style.slide} ref={firstSlid}>
        <AutoSlide />
        <AutoSlide />
      </div>
      <div className={style.slide} ref={lastSlide}>
        <AutoSlide />
        <AutoSlide />
      </div>
    </div>
  );
}
