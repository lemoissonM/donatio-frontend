import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Need from '../Item';
import { mockedNeed } from '@mocks/need.mock';
import { Wrapper } from '@mocks/wrapper';

describe('features/needs/item', () => {
  it('should render need item ', () => {
    const { container } = render(
      <Wrapper>
        <Need need={mockedNeed} />
      </Wrapper>,
    );
    expect(screen.queryByText(mockedNeed.title)).toBeTruthy();
    expect(screen.queryByRole('img')).toBeTruthy();
    expect(container.querySelector('img')?.src).toBe(mockedNeed.imgUrl);
    expect(screen.queryByText('Donate later')).toBeTruthy();
  });

  it('should render saved need item', () => {
    const { container } = render(
      <Wrapper>
        <Need need={mockedNeed} savedNeedId="122333" saved />
      </Wrapper>,
    );
    expect(screen.queryByText(mockedNeed.title)).toBeTruthy();
    expect(screen.queryByRole('img')).toBeTruthy();
    expect(container.querySelector('img')?.src).toBe(mockedNeed.imgUrl);
    expect(screen.queryByText('Delete')).toBeTruthy();
  });

  it('should render donation form', () => {
    const { container } = render(
      <Wrapper>
        <Need need={mockedNeed} savedNeedId="122333" saved />
      </Wrapper>,
    );
    const donateBtn = screen.queryByText('Donate now');
    if (donateBtn) {
      fireEvent.click(donateBtn);
      expect(screen.queryByText('Make a donation')).toBeInTheDocument();
    }
    expect(screen.queryByText(mockedNeed.title)).toBeTruthy();
    expect(screen.queryByRole('img')).toBeTruthy();
    expect(container.querySelector('img')?.src).toBe(mockedNeed.imgUrl);
    expect(screen.queryByText('Delete')).toBeTruthy();
    expect(donateBtn).toBeTruthy();
  });
});
