import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { QueryClientProvider, QueryClient } from 'react-query';
import NeedForm from '../form';
import { User } from '@features/users/types/user-type';
import { UserContext } from '@features/ui/layout/hooks/user.context';

const user: User = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'johndoe@email.com',
  role: 'admin',
  id: '1',
};

describe('features/needs/form', () => {
  it('should render need form', () => {
    render(
      <QueryClientProvider client={new QueryClient()}>
        <UserContext.Provider value={{ ...user, visibleView: 'admin' }}>
          <NeedForm />
        </UserContext.Provider>
      </QueryClientProvider>,
    );
    const donateBtn = screen.queryByText('Submit');
    expect(screen.queryByText('Create Need')).toBeTruthy();
    expect(donateBtn).toBeTruthy();
    expect(screen.queryByPlaceholderText('Your amount here')).toBeTruthy();
  });
});
