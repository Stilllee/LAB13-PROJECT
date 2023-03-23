import { useEffect, useState } from 'react';
import { useReadData } from '../utils/firebase/firestore/index';

/**
 *
 * @param {string} imageDataValue 데이터 상세 링크 정보
 */

export default function useDataFilter(imageDataValue) {
  const [filterData, setfilterData] = useState([]);
  const { readData, data, isLoading, error } = useReadData('image');
  useEffect(() => {
    (async () => {
      if (!data) {
        await readData();
      }
    })();

    if (data) {
      localStorage.setItem('imageState', JSON.stringify({ image: data }));
      const records = JSON.parse(localStorage.getItem('imageState'));
      const datas = records?.image?.filter(item => {
        return item.src?.[imageDataValue] !== undefined;
      });

      setfilterData(datas);
    }
  }, [data, imageDataValue, readData]);

  return filterData;
}
