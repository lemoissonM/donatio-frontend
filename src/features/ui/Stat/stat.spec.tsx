import React from 'react';
import { describe, expect, it } from 'vitest';
import Stat from '.';
import { render, screen } from '@testing-library/react';
import { UserContext } from '../layout/hooks/user.context';
import { User } from '@features/users/types/user-type';
import { QueryClient, QueryClientProvider } from 'react-query';

const user: User = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'johndoe@email.com',
  role: 'admin',
  id: '1',
  monthlyObjective: 100,
};

describe('features/ui/Button', () => {
  it('should render button with provided text', () => {
    render(
      <QueryClientProvider client={new QueryClient()}>
        <UserContext.Provider
          value={{
            ...user,
            role: 'user',
            setVisibleView: () => {
              console.log('admin');
            },
            visibleView: 'user',
          }}
        >
          <Stat />
        </UserContext.Provider>
      </QueryClientProvider>,
    );
    expect(screen.getByText('Month objective')).toBeInTheDocument();
    expect(screen.getByText('Total contribution')).toBeInTheDocument();
  });
});
