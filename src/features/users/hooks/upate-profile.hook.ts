import { useMutation, useQueryClient } from 'react-query';
import { patchApi } from '@utils/api';
import { AxiosError, AxiosResponse } from 'axios';
import makeToast, { defaultOptions } from '@utils/toast';

export const useUpdateProfileForm = (reset: any) => {
  const queryClient = useQueryClient();
  const profileForm = (data: any) => {
     // console.log(data);
    return patchApi('auth/me', data);
  };
  return useMutation(profileForm, {
    onSuccess: (result: AxiosResponse) => {
       // console.log(result);
      if (result.status === 200) {
        reset();
        makeToast.success('Profile update successfully !', defaultOptions);
        queryClient.invalidateQueries(['user-profile']);
      }
    },
    onError: (error: AxiosError) => {
      makeToast.error('Failed to update profile', defaultOptions);
       // console.log(error?.response);
    },
  });
};
