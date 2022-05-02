import { useMutation, useQueryClient } from 'react-query';
import { postApi } from '@utils/api';
import { AxiosError, AxiosResponse } from 'axios';
import makeToast, { defaultOptions } from '@utils/toast';

export const useDonationForm = (reset: any) => {
  const queryClient = useQueryClient();
  const donationForm = (data: any) => {
    return postApi('donations', { ...data, totalDonated: Number.parseInt(data.totalDonated) });
  };
  return useMutation(donationForm, {
    onSuccess: (result: AxiosResponse) => {
      // console.log(result);
      if (result.status === 201) {
        reset();
        makeToast.success('Thank you for your donation !', defaultOptions);
        queryClient.invalidateQueries(['user-profile']);
      }
    },
    onError: (error: AxiosError) => {
      makeToast.error('Failed to save your donation', defaultOptions);
      // console.log(error?.response);
    },
  });
};
