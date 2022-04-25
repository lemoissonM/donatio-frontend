import { useQuery } from 'react-query';
import { api } from '@utils/api';
import { Donation } from '../types/donation';

export const useDonations = (groupId?: string) => {
  return useQuery('donation-list', async (): Promise<Donation[]> => {
    const data = await api.donations(`?groupId=${groupId || ''}`);
    console.log(data);
    return data;
  });
};
