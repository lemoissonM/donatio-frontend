import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Input from '.';

describe('features/ui/Input', () => {
  it('should render an input component', () => {
    const { container } = render(
      <Input
        label="an input"
        placeholder="input placeholder"
        register={() => {
          console.log('register');
        }}
        name="input"
      />,
    );
    expect(container.querySelector('textarea')).toBeInTheDocument();
    expect(screen.queryByText('an input')).toBeTruthy();
    expect(screen.queryByPlaceholderText('input placeholder')).toBeTruthy();
  });
});
