import React from 'react';
import { describe, expect, it, vitest } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Wrapper } from '@mocks/wrapper';
import NeedList from '../saved-list';
import { mockedUser } from '@mocks/user.mock';
import { mockedNeedList } from '@mocks/need.mock';
import { mockedFetch } from '@mocks/fetch.mock';

describe('features/needs/saved', () => {
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
    expect(screen.queryByText(mockedNeedList[0].title)).toBeTruthy();
  });
});
