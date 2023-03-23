import { useRecoilState } from 'recoil';
import { sendPasswordResetEmail } from 'firebase/auth';
import { useCallback, useMemo, useState } from 'react';
import { emailError } from '../../../@store/emailError';
// eslint-disable-next-line import/no-cycle
import { auth } from './index';

export function useResetPassword() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useRecoilState(emailError);
  const [user, setUser] = useState(null);

  const resetPassword = useCallback(
    async email => {
      setIsLoading(true);
      try {
        const userEmail = await sendPasswordResetEmail(auth, email);
        setUser(userEmail);
        setError(false);
        // eslint-disable-next-line no-shadow
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    },
    [setError],
  );

  return useMemo(
    () => ({
      isLoading,
      error,
      user,
      resetPassword,
    }),
    [isLoading, error, user, resetPassword],
  );
}
