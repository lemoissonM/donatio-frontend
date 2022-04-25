import { useQuery } from 'react-query';
import { api } from '@utils/api';

export const useTopContributors = (groupId?: string) => {
  return useQuery('top-contributor', async (): Promise<any> => {
    const data = await api.donations(`topContributors?groupId=${groupId || ''}`);
    console.log(data, 'data');
    if (Array.isArray(data)) return data;
    throw new Error('Failed to fetch need list');
  });
};
