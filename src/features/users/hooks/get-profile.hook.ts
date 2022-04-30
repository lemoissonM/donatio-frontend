import { useQuery } from 'react-query';
import { api } from '@utils/api';
import { User } from '../types/user-type';
import { logout } from '@utils/auth';

export const useUserProfile = (authenticated = false) => {
  return useQuery('user-profile', async (): Promise<User | null> => {
    if (!authenticated) return null;
    const data = await api.auth('me');
    if (data && data.email) return data;
    logout();
    throw new Error('Failed to fetch need list');
  });
};
