import { useMutation, useQueryClient } from 'react-query';
import { deleteApi } from '@utils/api';
import { AxiosError, AxiosResponse } from 'axios';
import makeToast, { defaultOptions } from '@utils/toast';

export const useDeleteItem = () => {
  const queryClient = useQueryClient();
  const saveItem = (id: string) => {
    return deleteApi(`savedNeeds/${id}`);
  };
  return useMutation(saveItem, {
    onSuccess: (result: AxiosResponse) => {
      queryClient.invalidateQueries('need-list-saved');
      makeToast.success('Need deleted successfully !', defaultOptions);
      return result.data;
    },
    onError: (error: AxiosError) => {
      makeToast.error('Failed to delete needs !', defaultOptions);
      console.log(error?.response);
    },
  });
};
