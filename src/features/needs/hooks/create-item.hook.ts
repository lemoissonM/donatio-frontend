import { useMutation, useQueryClient } from 'react-query';
import { postApi, uploadImage } from '@utils/api';
import { AxiosError, AxiosResponse } from 'axios';
import makeToast, { defaultOptions } from '@utils/toast';

export const useCreateNeed = (resetForm: any) => {
  const queryClient = useQueryClient();
  const saveItem = async (data: any) => {
    const img = await uploadImage(data.imgUrl[0]);
    return postApi('needs', {
      ...data,
      imgUrl: img.data.url,
      totalNeeded: Number.parseInt(data.totalNeeded),
    });
  };
  return useMutation(saveItem, {
    onSuccess: (result: AxiosResponse) => {
      if (result.status === 201) {
        resetForm();
        queryClient.invalidateQueries(['savedNeeds']);
        makeToast.success('Need added successfully !', defaultOptions);
        return result.data;
      }
    },
    onError: (error: AxiosError) => {
      if (error) {
        makeToast.error('Creating need failed !', defaultOptions);
        console.log(error?.response);
      }
    },
  });
};
