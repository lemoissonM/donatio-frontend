import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Loading } from '.';
import { LoadingIcon } from './Icon';

describe('features/ui/Loader', () => {
  it('should render loading icon and a citation', () => {
    const { container } = render(<Loading />);
    expect(screen.queryByTitle('Loading')).toBeInTheDocument();
    expect(container.querySelector('div')).toBeTruthy();
  });

  it('should have only loading icon svg', () => {
    const { container } = render(<LoadingIcon />);
    expect(screen.queryByTitle('Loading')).toBeInTheDocument();
    expect(container.querySelector('div')).toBeFalsy();
  });
});
