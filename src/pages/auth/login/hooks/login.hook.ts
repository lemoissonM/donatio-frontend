import { useMutation } from 'react-query';
import { postApi } from '@utils/api';
import { AxiosError, AxiosResponse } from 'axios';

export const useLogin = (navigate: any) => {
  const login = (data: any) => {
    return postApi('auth/login', data);
  };
  return useMutation(login, {
    onSuccess: (result: AxiosResponse) => {
      if (result.status === 201) {
        localStorage.setItem('token', result?.data?.accessToken);
        navigate('/');
        window.location.reload();
      }
    },
    onError: (error: AxiosError) => {
      // console.log(error);
    },
  });
};
