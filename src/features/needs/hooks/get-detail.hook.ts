import { useQuery } from 'react-query';
import { api } from '@utils/api';
import { Need } from '../types/need';

export const useDetailNeed = (id: string) => {
  return useQuery('need-detail', async (): Promise<Need> => {
    const data = await api.needs(id);
    if (data && data.title) return data;
    throw new Error('Failed to fetch need list');
  });
};
