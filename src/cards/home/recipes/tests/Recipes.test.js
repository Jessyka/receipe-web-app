import {render} from '@testing-library/react';
import React from 'react';
import Recipes from '../Recipes';

test('renders recipes list', () => {
    const { getByTestId } = render(<Recipes searchTerm={''} />);
    expect(getByTestId(/recipes-list/i)).toBeTruthy();
});

test('renders error message container', () => {
    const { getByTestId } = render(<Recipes searchTerm={''}/>);
    expect(getByTestId(/recipes-error-message/i)).toBeTruthy();
});
