import React from 'react';
import { render, screen } from '@testing-library/react';
import { InputSearch } from '../InputSearch';

describe('InputSearch', () => {
  it('Renders InputSearch component', () => {
    render(<InputSearch canDisplayLabel={true} onInputChange={() => undefined} onEnterClicked={() => undefined} />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByText(/Search a user on GitHub/i)).toBeInTheDocument();
  })
})
