import { useNavigate } from 'react-router-dom';
import style from './LandingButtonPage.module.css';

function LandingButtonPage() {
  const taingloginpage = useNavigate();
  const navigatetologin = () => {
    taingloginpage('/loginpage');
  };

  return (
    <section className={style.section}>
      <div className={style.sectionimage} />
      <div className={style.section_message}>
        <p className={style.section_text}>지금 시작해 보세요</p>
      </div>
      <div className={style.section_button}>
        <div className={style.svgimage} />
        <button className={style.section_buttonstyle} onClick={navigatetologin}>
          <p className={style.button_text}>새로워진 티빙을 만나보세요!</p>
        </button>
      </div>
    </section>
  );
}

export default LandingButtonPage;
