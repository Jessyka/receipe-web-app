import React from 'react';
import { render } from '@testing-library/react';
import {AlertMessage} from '../AlertMessage';

test('renders alertMessage', () => {
    const { getByTestId } = render(<AlertMessage />);
    expect(getByTestId(/alert-message/i)).toBeTruthy();
});

test('renders alertMessage message', () => {
    const { getByText } = render(<AlertMessage message={'my-message'}/>);
    const message = getByText(/my-message/i);
    expect(message).toBeInTheDocument();
});
