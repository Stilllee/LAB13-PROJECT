import { getAuth } from 'firebase/auth';
import firebaseApp from '../app';

export * from './useSignUp';
export * from './useSignIn';
export * from './useSignOut';
export * from './useAuthState';
export * from './useResetPassword';

export const auth = getAuth(firebaseApp);
auth.useDeviceLanguage();
