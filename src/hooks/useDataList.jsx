import { useEffect, useState } from 'react';
import { useReadData } from '../utils/firebase/firestore/index';

export default function useDataList() {
  const [filterData, setfilterData] = useState([]);
  const { readData, data, isLoading, error } = useReadData('image');
  useEffect(() => {
    (async () => {
      if (!data) {
        await readData();
      }
    })();

    if (data) {
      localStorage.setItem('ListDataState', JSON.stringify({ image: data }));
      const records = JSON.parse(localStorage.getItem('ListDataState'));
      const datas = records?.image?.filter(item => {
        return item.src?.slide !== undefined;
      });

      setfilterData(datas);
    }
  }, [data, readData]);

  return filterData.slice(1, 11);
}
