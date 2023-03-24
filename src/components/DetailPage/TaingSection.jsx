/* eslint-disable react/button-has-type */
import style from './TaingSection.module.css';
import image from '../../assets/images/maknaeadeul_02.jpg';
import LikeButton from './LikeButton';

function TaingSection() {
  return (
    <article className={style.article}>
      <div className={style.left_space}>
        <button className={style.article_button}>
          <p>시청하기</p>
        </button>
        <LikeButton />
      </div>
      <p className={style.text_space}>
        재벌집 막내아들
        <br />
        출연진 송중기 조한철
      </p>
      <div className={style.right_space}>
        <img src={image} alt="" />
      </div>
    </article>
  );
}

export default TaingSection;
