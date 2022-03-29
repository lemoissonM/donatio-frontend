import { useQuery } from 'react-query';
import { api } from '@utils/api';
import { Donation } from '../types/donation';

export const useDonationDetail = (id: string) => {
  return useQuery('donation-detail', async (): Promise<Donation> => {
    const data = await api.donations(id);
    return data;
  });
};
