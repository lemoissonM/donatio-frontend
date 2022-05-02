import React from 'react';
import { describe, expect, it } from 'vitest';
import Select from '.';
import { render, screen } from '@testing-library/react';

describe('features/ui/Button', () => {
  it('should render select element when setValue not provided', () => {
    const { container } = render(
      <Select
        label="Click here"
        name="select"
        register={() => {
          console.log('e');
        }}
        options={[{ value: 'ee', label: 'eee' }]}
      />,
    );
    expect(screen.getByText('Click here')).toBeInTheDocument();
    expect(container.querySelector('select')).toBeTruthy();
  });

  it('should render react-select when setValue provided', () => {
    const { container } = render(
      <Select
        label="Click here"
        name="select"
        setValue={() => {
          console.log('e');
        }}
        options={[{ value: 'ee', label: 'eee' }]}
      />,
    );
    expect(screen.getByText('Click here')).toBeInTheDocument();
    expect(container.querySelector('#react-select-2-live-region')).toBeTruthy();
  });
});
