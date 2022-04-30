import React from 'react';
import { describe, expect, it } from 'vitest';
import Button from '.';
import { render, screen, userEvent } from '../../../../test-utils';

describe('Simple working test', () => {
  it('the title is visible', () => {
    render(<Button label="Click here" />);

    const welcomeText = screen.getByText(/Hello Vite \+ React!/i);

    screen.debug(welcomeText);

    expect(screen.getAllByRole('button')).toBeInTheDocument();
  });
});
