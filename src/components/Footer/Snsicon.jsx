import { string } from 'prop-types';
import style from '@components/Footer/SnsIcon.module.css';

export function SnsIcon({ name, src }) {
  return (
    <a
      href={src}
      target="_blank"
      title={name}
      className={style[name]}
      rel="noreferrer"
      tabIndex="-1"
    >
      {' '}
    </a>
  );
}

/** Props */
SnsIcon.defaultProps = {
  name: '',
  src: '',
};

SnsIcon.propTypes = {
  name: string,
  src: string,
};
