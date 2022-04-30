import { useMutation } from 'react-query';
import { postApi } from '@utils/api';
import { AxiosError, AxiosResponse } from 'axios';
import makeToast, { defaultOptions } from '@utils/toast';

export const useSignup = (navigate: any) => {
  const signup = (data: any) => {
    return postApi('auth/register', data);
  };
  return useMutation(signup, {
    onSuccess: (result: AxiosResponse) => {
      if (result.status === 201) {
        //localStorage.setItem('token', result?.data?.accessToken);
        //navigate('/');
        //window.location.reload();
        makeToast(
          'Signup successful, Further instructions have been sent to your email',
          defaultOptions,
        );
      }
    },
    onError: (error: AxiosError) => {
      // console.log(error?.response?.data);
    },
  });
};
