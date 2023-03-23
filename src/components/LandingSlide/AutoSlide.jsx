import { useLayoutEffect, useState } from 'react';
import useDataFilter from '../../hooks/useDataFilter';
import style from './AutoSlide.module.css';

export default function AutoSlide() {
  const DataFilter = useDataFilter('rendingfunny');
  const [data, setData] = useState([]);

  useLayoutEffect(() => {
    DataFilter.splice(3, 2);
    DataFilter.shift(0);
    setData(DataFilter);
  }, [DataFilter]);

  return (
    <div className={style.slideWrapper}>
      {data.map(contents => {
        const baseUrl = '../src/assets/images/';
        const src = `${baseUrl}${contents.src.rendingfunny}.jpg`;
        return (
          <div key={contents.id} className={style.wrapper}>
            <img className={style.img} src={src} alt={`${contents.name}`} />
          </div>
        );
      })}
    </div>
  );
}
