import {
  SignUpTitle,
  SignUpRegForm,
  SignUpCheckBox,
  SignUpButton,
} from '@components';
import style from './Section.module.css';

export function Section() {
  return (
    <section className={style.signupSection}>
      <div className={style.signupContentWrap}>
        <SignUpTitle />
        <SignUpRegForm />
        <SignUpCheckBox />
        <SignUpButton />
      </div>
    </section>
  );
}
