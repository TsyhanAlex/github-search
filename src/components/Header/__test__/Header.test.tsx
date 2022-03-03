import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from '../Header';

describe("Header", () => {
    it("Renders Header component", () => {
    render(<Header onLabelClick={() => undefined} />);
    expect(screen.getByText(/GITHUB SEARCH/i)).toBeInTheDocument();
  });
});

