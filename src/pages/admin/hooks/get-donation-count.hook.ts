import { useQuery } from 'react-query';
import { api } from '@utils/api';

export const useDonationCount = (groupId: string) => {
  // console.log(groupId);
  return useQuery('donation-count', async (): Promise<any> => {
    const data = await api.donations(`donationCount?groupId=${groupId || ''}`);
    // console.log(data);
    return data;
  });
};
