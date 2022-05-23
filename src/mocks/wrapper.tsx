import { UserContext, UserContextType } from '@features/ui/layout/hooks/user.context';
import { User } from '@features/users/types/user-type';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { mockedUser } from './user.mock';

export const Wrapper: React.FC<{ user?: User & UserContextType }> = ({
  children,
  user = {
    ...mockedUser,
    visibleView: 'user',
    setVisibleView: () => {
      console.log('');
    },
  },
}) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <QueryClientProvider client={new QueryClient()}>
              <UserContext.Provider value={user}>{children}</UserContext.Provider>
            </QueryClientProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
