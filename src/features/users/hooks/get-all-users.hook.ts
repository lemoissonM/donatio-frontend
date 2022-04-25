import { useQuery } from 'react-query';
import { api } from '@utils/api';
import { User } from '../types/user-type';
import { logout } from '@utils/auth';

export const useUserList = (groupId: string) => {
  return useQuery('user-list', async (): Promise<User[]> => {
    const data = groupId
      ? await api['user-in-group'](`?groupId=${groupId || ''}`)
      : await api.auth(`my-users?groupId=${groupId || ''}`);
    if (Array.isArray(data)) return data;
    throw new Error('Failed to fetch need list');
  });
};
