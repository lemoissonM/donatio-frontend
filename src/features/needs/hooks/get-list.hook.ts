import { useQuery } from 'react-query';
import { api } from '@utils/api';
import { Need } from '../types/need';
import makeToast, { defaultOptions } from '@utils/toast';

export const useNeeds = (groupId?: string) => {
  return useQuery('need-list', async (): Promise<Array<Need>> => {
    const data = await api.needs(`?groupId=${groupId || ''}`);
    if (Array.isArray(data)) return data;
    makeToast.error('Failed to fetch needs !', defaultOptions);
    throw new Error('Failed to fetch need list');
  });
};
