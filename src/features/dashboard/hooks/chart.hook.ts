import { useQuery } from 'react-query';
import { api } from '@utils/api';

export const useChartData = (groupId?: string) => {
  return useQuery('chart-data', async (): Promise<any> => {
    console.log(`chartData?${groupId ? `groupId=${groupId || ''}` : ''}`);
    const data = await api.donations(`chartData?${groupId ? `groupId=${groupId || ''}` : ''}`);
    if (Array.isArray(data)) return data;
    throw new Error('Failed to fetch need list');
  });
};
