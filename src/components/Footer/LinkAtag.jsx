import { string } from 'prop-types';

export function LinkAtag({ name, src }) {
  return <a href={src}>{name}</a>;
}

LinkAtag.defaultProps = {
  name: '',
  src: '#unknown',
};

LinkAtag.propTypes = {
  name: string,
  src: string,
};
