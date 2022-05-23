import React from 'react';
import { describe, expect, it, vitest } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Wrapper } from '@mocks/wrapper';
import NeedList from '../list';
import { mockedUser } from '@mocks/user.mock';
import { mockedNeedList } from '@mocks/need.mock';
import { mockedFetch } from '@mocks/fetch.mock';

describe('features/needs/list', () => {
  it('should render create need btn when is admin ', () => {
    const { container } = render(
      <Wrapper
        user={{
          ...mockedUser,
          visibleView: 'admin',
          setVisibleView: () => {
            console.log('');
          },
        }}
      >
        <NeedList />
      </Wrapper>,
    );
    expect(screen.queryByText('Create Need')).toBeTruthy();
  });

  it('should render create need btn when is admin ', () => {
    const { container } = render(
      <Wrapper
        user={{
          ...mockedUser,
          visibleView: 'admin',
          setVisibleView: () => {
            console.log('');
          },
        }}
      >
        <NeedList />
      </Wrapper>,
    );
    expect(screen.queryByText('Create Need')).toBeTruthy();
  });

  it('should render list of need items ', () => {
    global.fetch = mockedFetch(mockedNeedList);
    const { container } = render(
      <Wrapper
        user={{
          ...mockedUser,
          visibleView: 'admin',
          setVisibleView: () => {
            console.log('');
          },
        }}
      >
        <NeedList />
      </Wrapper>,
    );
    screen.debug();
    expect(screen.queryByText(mockedNeedList[0].title)).toBeTruthy();
  });
});
