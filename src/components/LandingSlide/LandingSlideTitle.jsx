import gsap from 'gsap';
import { string } from 'prop-types';
import { useLayoutEffect, useRef } from 'react';
import style from './LandingSlideTitle.module.css';

export default function LandingSlideTitle({ title, boldText, text }) {
  const slideTitle = useRef();

  useLayoutEffect(() => {
    gsap.context(() => {
      gsap.fromTo('h2', { y: 50 }, { y: 0, duration: 1 });
      gsap.fromTo(
        'p',
        { y: 50 },
        { y: 0, ease: 'circ.out', stagger: 0.2, delay: 0.2 },
      );
    }, slideTitle);
  }, []);

  return (
    <div className={style.slideTitle} ref={slideTitle}>
      <h2 className={style.title}>{title}</h2>
      <p className={style.boldText}>{boldText}</p>
      <p className={style.text}>{text}</p>
    </div>
  );
}

/** Props */
LandingSlideTitle.defaultProps = {
  title: null,
  boldText: null,
  text: null,
};

LandingSlideTitle.propTypes = {
  title: string,
  boldText: string,
  text: string,
};
