import { useQuery } from 'react-query';
import { api } from '@utils/api';

export const useDonationCount = () => {
  return useQuery('donation-count', async (): Promise<any> => {
    const data = await api.donations('donationCount');
    console.log(data);
    return data;
  });
};
