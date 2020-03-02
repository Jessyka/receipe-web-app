import {useRecipes} from './useRecipes';
import {AlertMessage} from '../../../components/alertMessage/AlertMessage';
import {Recipe} from '../../../components/recipe/Recipe';
import React from 'react';
import './Recipes.css';

export default function Recipes({searchTerm}) {
    const { recipes, alertMessage } = useRecipes(searchTerm);
    return (
        <>
            <div className='alert-messages' data-testid={'recipes-error-message'}>
                {alertMessage.showMessage ? <AlertMessage severity={alertMessage.severity} message={alertMessage.message}/> : null}
            </div>
            <div className='recipe-item' data-testid={'recipes-list'}>
                {
                    recipes.length > 0 ?
                        recipes.map((item, index) => <Recipe key={index} data={item.recipe}/>) : null
                }
            </div>
        </>
    );
}
