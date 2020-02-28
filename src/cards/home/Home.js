import React, { useState } from 'react';
import {HeaderView} from '../../components/header/HeaderView'
import {Recipe} from '../../components/recipe/Recipe'
import {API_URL} from "../../config";
import {SearchFilter} from "../../components/searchFilter/SearchFilter";
import './Home.css'
import {AlertMessage} from "../../components/alertMessage/AlertMessage";
import AlertSeverity from "../../components/alertMessage/AlertSeverity";

function Home() {

    const [ recipes, setRecipes ] = useState([])
    const [ message, setError ] = useState('')

    const addError = newMessage => {
        setError(newMessage);
        setRecipes([]);
    }

    const removeError = () => {
        setError('');
    }

    const updateSearchQuery = searchData => {
        if (searchData.length > 0) {
            fetch(API_URL(searchData))
                .then(response => response.json().then(data => {
                    setRecipes(data.hits);
                    removeError();
                }))
                .catch(() => addError('Error ao carregar receitas.'));
        }
    }

    return (
        <div>
            <HeaderView/>
            <div className={'search-field-container'}>
                <SearchFilter onSearchSubmit={updateSearchQuery}/>
            </div>
            <div className="alert-messages">
                { message ? <AlertMessage severity={AlertSeverity.error} message={message}/> : null }
            </div>
            <div className="recipe-item">
                {
                    recipes.length > 0 ?
                        recipes.map((item, index) => <Recipe key={index} data={item.recipe}/>) : null
                }
            </div>
        </div>
    );
}

export default Home;
