import { useMutation, useQueryClient } from 'react-query';
import { postApi } from '@utils/api';
import { AxiosError, AxiosResponse } from 'axios';
import makeToast, { defaultOptions } from '@utils/toast';

export const useSaveItem = () => {
  const queryClient = useQueryClient();
  const saveItem = (data: any) => {
    return postApi('savedNeeds', { ...data });
  };
  return useMutation(saveItem, {
    onSuccess: (result: AxiosResponse) => {
      if (result.status === 201) {
        makeToast.success('Saved for later !', defaultOptions);
        queryClient.invalidateQueries(['savedNeeds']);
        return result.data;
      }
    },
    onError: (error: AxiosError) => {
      makeToast.error('Failed to save needs !', defaultOptions);
       // console.log(error?.response);
    },
  });
};
