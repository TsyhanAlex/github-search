import React from 'react';
import { render } from '@testing-library/react';
import { LoadingIndicator } from '../LoadingIndicator';

describe('LoadingIndicator', () => {
  it("should render LoadingIndicator", () => {
    expect(() => render(<LoadingIndicator />)).not.toThrow();
  });
})
