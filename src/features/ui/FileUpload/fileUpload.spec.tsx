import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import FileUpload from '.';

describe('features/ui/FileUpload', () => {
  it('should input with type file', () => {
    const { container } = render(
      <FileUpload
        label="upload your document"
        placeholder="upload"
        register={() => {
          console.log('register');
        }}
        name="image"
      />,
    );
    expect(container.querySelector('input[type=file]')).toBeInTheDocument();
    expect(screen.queryByText('Upload a file')).toBeTruthy();
  });
});
