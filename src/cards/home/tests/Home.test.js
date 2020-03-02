import {render, fireEvent, queryByAttribute} from '@testing-library/react';
import Home from '../Home';
import React from 'react';
import fetchMock from 'fetch-mock';
import {API_URL} from '../../../config';
import {emptyResponse, recipesResponse} from '../recipes/tests/RecipesFixture';
import {waitForElement} from '@testing-library/dom';

const getById = queryByAttribute.bind(null, 'id');

function inputSearchData(homeComponent, searchData) {
    const inputNode = getById(homeComponent.container, 'searchField');
    fireEvent.change(inputNode, {target: {value: searchData}});
    return inputNode;
}

function submitSearch(homeComponent, searchData) {
    const inputNode = inputSearchData(homeComponent, searchData);
    fireEvent.click(homeComponent.getByText('Buscar'));
    return inputNode;
}

function mockFetchAPIRecipes(query, response) {
    fetchMock.reset();
    fetchMock.mock(API_URL(query), response);
}

test('Home - renders header', () => {
    const {getByTestId} = render(<Home />);
    expect(getByTestId(/header/i)).toBeTruthy();
});

test('It should keep in front of the input', () => {
    const homeComponent = render(<Home />);
    const inputNode = inputSearchData(homeComponent, 'arroz');
    expect(inputNode.value).toBe('arroz');
})


test('It should keep in front of the input and can submit search', () => {
    const homeComponent = render(<Home />);
    const inputNode = submitSearch(homeComponent, 'arroz');
    expect(inputNode.value).toBe('arroz');
})

test('It should show error message when make a search and endpoint is not available', async () => {
    mockFetchAPIRecipes('any invalid data', 500);
    const homeComponent = render(<Home />);
    submitSearch(homeComponent, 'any invalid data');
    await waitForElement(() => homeComponent.getByText(/Error ao carregar receitas/i));
    expect(homeComponent.getByText(/Error ao carregar receitas/i)).toBeInTheDocument();
})

test('It should info message when make a search and endpoint returns empty data', async () => {
    const data = emptyResponse;
    mockFetchAPIRecipes('arroz', data);

    const homeComponent = render(<Home />);
    submitSearch(homeComponent, 'arroz');
    await waitForElement(() => homeComponent.getByText(/Nenhum item encontrado/i));

    expect(homeComponent.getByText(/Nenhum item encontrado/i)).toBeInTheDocument();
})

test('It should load recipe data when make a search and endpoint returns data', async () => {
    const data =  recipesResponse;
    mockFetchAPIRecipes('cheese', data);

    const homeComponent = render(<Home />);
    submitSearch(homeComponent, 'cheese');
    await waitForElement(() => homeComponent.getByText(/Cheese Enchiladas with Chili Con Carn/i));

    expect(homeComponent.getByText(/Cheese Enchiladas with Chili Con Carn/i)).toBeInTheDocument();
})
