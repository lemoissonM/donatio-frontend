import { useMutation } from 'react-query';
import { postApi } from '@utils/api';
import { AxiosError } from 'axios';
import makeToast, { defaultOptions } from '@utils/toast';

export const useResetPassword = (navigate: any) => {
  const reset = (data: any) => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
     // console.log(params, 'params');
    return postApi(`auth/reset-password?token=${params.token}`, data);
  };
  return useMutation(reset, {
    onSuccess: (res) => {
       // console.log(res);
      makeToast('Reset link sent to your email', defaultOptions);
      navigate('/login');
    },
    onError: (error: AxiosError) => {
       // console.log(error);
    },
  });
};
