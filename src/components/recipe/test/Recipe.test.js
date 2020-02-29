import {render} from '@testing-library/react';
import React from 'react';
import { Recipe } from '../Recipe';

const recipeData = {
    label: 'my-label',
    image: '',
    calories: 100,
    ingredients: [
        {text: 'ingredient 1'},
        {text: 'ingredient 2'}
    ]
}

test('renders recipe container', () => {
    const {getByTestId} = render(<Recipe data={recipeData} />);
    expect(getByTestId(/recipe-container/i)).toBeTruthy();
});

test('renders recipe label', () => {
    const {getByText} = render(<Recipe data={recipeData} />);
    const labelElement = getByText(/my-label/i);
    expect(labelElement).toBeInTheDocument();
});

test('renders recipe calories', () => {
    const {getByText} = render(<Recipe data={recipeData} />);
    const caloriesElement = getByText(/Calories: 100 Kcal/i);
    expect(caloriesElement).toBeInTheDocument();
});

test('renders recipe ingredients', () => {
    const {getByText} = render(<Recipe data={recipeData} />);
    const firstIngredient = getByText(/ingredient 1/i);
    const secondIngredient = getByText(/ingredient 2/i);
    expect(firstIngredient).toBeInTheDocument();
    expect(secondIngredient).toBeInTheDocument();
});
