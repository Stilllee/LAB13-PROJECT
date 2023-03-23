import { getFirestore } from 'firebase/firestore';
import firebaseApp from './app';

export const db = getFirestore(firebaseApp);

// export * from './useCreateAuthUser';
// eslint-disable-next-line import/no-cycle
// export * from './useWriteBatchData';
// eslint-disable-next-line import/no-cycle
// export * from './useCreateData';
// eslint-disable-next-line import/no-cycle
export * from './useReadData';
// export * from './useUpdateData';
// eslint-disable-next-line import/no-cycle
// export * from './useDeleteData';
// eslint-disable-next-line import/no-cycle
// export * from './useDataState';
