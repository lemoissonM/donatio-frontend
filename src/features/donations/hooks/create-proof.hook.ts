import { useMutation, useQueryClient } from 'react-query';
import { postApi, uploadImage } from '@utils/api';
import { AxiosError, AxiosResponse } from 'axios';
import makeToast, { defaultOptions } from '@utils/toast';

export const useDonationProofForm = (reset: any) => {
  const queryClient = useQueryClient();
  const donationForm = async (data: any) => {
    const img = await uploadImage(data.proofUrl[0]);
    return postApi('donation-proofs', {
      ...data,
      totalAmount: Number.parseInt(data.totalAmount),
      proofUrl: img.data.url,
    });
  };
  return useMutation(donationForm, {
    onSuccess: (result: AxiosResponse) => {
      // console.log(result);
      if (result.status === 201) {
        reset();
        makeToast.success('Proof added successfully !', defaultOptions);
        queryClient.invalidateQueries(['donation-detail']);
      }
    },
    onError: (error: AxiosError) => {
      makeToast.error('Failed to add the proof', defaultOptions);
      // console.log(error?.response);
    },
  });
};
