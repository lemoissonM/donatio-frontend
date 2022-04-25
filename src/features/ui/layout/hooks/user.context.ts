import { User } from '@features/users/types/user-type';
import React from 'react';
type UserContextType = {
  visibleView: string;
  setVisibleView?: React.Dispatch<React.SetStateAction<string>>;
};

export const UserContext = React.createContext({} as User & UserContextType);
