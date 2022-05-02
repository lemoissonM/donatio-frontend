import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Menu from '.';
import MenuItem from './Item';
import { UserContext } from '../layout/hooks/user.context';
import { User } from '@features/users/types/user-type';
import { Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';

const user: User = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'johndoe@email.com',
  role: 'admin',
  id: '1',
};

describe('features/ui/Menu', () => {
  it('Should render Menu list and show it on sm devices', () => {
    const { container } = render(
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <UserContext.Provider
                value={{
                  ...user,
                  setVisibleView: () => {
                    console.log('admin');
                  },
                  visibleView: 'admin',
                }}
              >
                <Menu closeMenu show />
              </UserContext.Provider>
            }
          />
        </Routes>
      </BrowserRouter>,
    );
    expect(container.querySelector('.sm\\:translate-x-0')).toBeTruthy();
    expect(container.querySelector('aside')).toBeTruthy();
    expect(screen.queryByText('Donations')).toBeTruthy();
  });

  it('Should render Menu list but not show it on sm devices', () => {
    const { container } = render(
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
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
                <Menu closeMenu show />
              </UserContext.Provider>
            }
          />
        </Routes>
      </BrowserRouter>,
    );
    expect(container.querySelector('aside')).toBeTruthy();
    expect(screen.queryByText('My donations')).toBeTruthy();
  });
});
