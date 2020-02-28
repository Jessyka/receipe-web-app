import React, { useState } from 'react';
import {HeaderView} from '../../components/header/HeaderView'
import {Recipe} from '../../components/recipe/Recipe'
import {API_URL} from "../../config";
import {SearchFilter} from "../../components/searchFilter/SearchFilter";
import './Home.css'

function Home() {

    const [ recipes, setRecipes ] = useState([])

    const updateSearchQuery = searchData => {
        if (searchData.length > 0) {
            fetch(API_URL(searchData))
                .then(response => response.json().then(data => setRecipes(data.hits)));
        }
    }

    return (
        <div>
            <HeaderView/>
            <div className={'search-field-container'}>
                <SearchFilter onSearchSubmit={updateSearchQuery}/>
            </div>
            <div className="recipe-item">
                {
                    recipes.length > 0 ? 
                        recipes.map((item, index) => <Recipe key={index} data={item.recipe}/>)
                    :
                        null
                }
            </div>
        </div>
    );
}

export default Home;
