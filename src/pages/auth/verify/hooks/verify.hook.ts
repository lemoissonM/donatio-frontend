import { useMutation } from 'react-query';
import { postApi } from '@utils/api';
import { AxiosError, AxiosResponse } from 'axios';

export const useVerify = (navigate: any) => {
  const verify = (data: any) => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    return postApi(`auth/verify?token=${params.token}`, data);
  };
  return useMutation(verify, {
    onSuccess: (result: AxiosResponse) => {
      if (result.status === 201) {
        navigate('/login');
      }
    },
    onError: (error: AxiosError) => {
      // console.log(error);
    },
  });
};
