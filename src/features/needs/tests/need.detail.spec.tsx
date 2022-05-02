import React from 'react';
import { describe, expect, it } from 'vitest';
import Detail from '../detail';
import { render, screen, fireEvent } from '@testing-library/react';
import { Need } from '../types/need';
import { QueryClientProvider, QueryClient } from 'react-query';

const need: Need = {
  id: '1',
  title: 'Need 1',
  description: 'Need 1 description',
  imgUrl: 'https://via.placeholder.com/150',
  totalNeeded: 100,
  totalContribution: 50,
  publisherId: 'ee',
  donationProofs: [],
  myContribution: 200,
};

describe('features/needs', () => {
  it('should render Detail need', () => {
    const { container } = render(<Detail need={need} />);
    console.log(container.querySelector('.text-secondary-900')?.textContent);
    expect(container.querySelector('.text-secondary-900')?.textContent?.replace(' ', '')).toBe(
      '100 USD',
    );
    expect(screen.queryByRole('img')).toBeInTheDocument();
    expect(screen.queryByText('Need 1')).toBeInTheDocument();
    expect(screen.queryByText('Need 1 description')).toBeInTheDocument();
  });

  it('should render donation form', () => {
    render(
      <QueryClientProvider client={new QueryClient()}>
        <Detail id="wacd-acds-hehe-tryu" />
      </QueryClientProvider>,
    );
    const donateBtn = screen.queryByText('Donate');
    if (donateBtn) {
      fireEvent.click(donateBtn);
      expect(screen.queryByText('Make a donation')).toBeInTheDocument();
    }
  });
});
