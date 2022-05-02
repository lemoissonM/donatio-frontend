import React from 'react';
import { describe, expect, it } from 'vitest';
import Button from '.';
import { render, screen } from '@testing-library/react';

describe('features/ui/Button', () => {
  it('should render button with provided text', () => {
    render(<Button label="Click here" />);
    expect(screen.getByText('Click here')).toBeInTheDocument();
    expect(screen.getAllByRole('button')).toBeTruthy();
  });

  it('should render an input submit element', () => {
    const { container } = render(<Button label="Click here" isSubmit={true} />);
    expect(screen.queryByTitle('Loading')).toBeFalsy();
    expect(container.querySelector('input[type=submit]')).toBeTruthy();
    expect(screen.getByRole('button')).toBeTruthy();
  });

  it('should render a button with a loading icon', () => {
    render(<Button label="Click here" isLoading={true} />);
    expect(screen.getByTitle('Loading')).toBeTruthy();
  });
});
