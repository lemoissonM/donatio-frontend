import { useMutation } from 'react-query';
import { postApi } from '@utils/api';
import { AxiosError } from 'axios';
import makeToast, { defaultOptions } from '@utils/toast';

export const useReset = () => {
  const reset = (data: any) => {
    return postApi('auth/request-reset-password', data);
  };
  return useMutation(reset, {
    onSuccess: () => {
      makeToast('Reset link sent to your email', defaultOptions);
    },
    onError: (error: AxiosError) => {
      console.log(error);
    },
  });
};
