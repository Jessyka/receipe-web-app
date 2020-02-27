import React from 'react';
import { render } from '@testing-library/react';
import {SearchFilter} from '../SearchFilter';

test('renders Receitas link', () => {
    const {getByTestId} = render(<SearchFilter />);
    expect(getByTestId(/search-form/i)).toBeTruthy();
});
