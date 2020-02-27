import React from 'react';
import { render } from '@testing-library/react';
import {HeaderView} from '../HeaderView';

test('renders Receitas link', () => {
    const { getByText } = render(<HeaderView />);
    const linkElement = getByText(/Receitas/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders Sobre link', () => {
    const { getByText } = render(<HeaderView />);
    const linkElement = getByText(/Sobre/i);
    expect(linkElement).toBeInTheDocument();
});
