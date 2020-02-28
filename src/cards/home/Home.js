import React, {useState} from 'react';
import {HeaderView} from '../../components/header/HeaderView'
import {Recipe} from '../../components/recipe/Recipe'
import {SearchFilter} from "../../components/searchFilter/SearchFilter";
import './Home.css'
import {AlertMessage} from "../../components/alertMessage/AlertMessage";
import AlertSeverity from "../../components/alertMessage/AlertSeverity";
import {useRecipes} from "./useRecipes";

function Recipes({searchTerm}) {
    const { recipes, message } = useRecipes(searchTerm)
    return (
        <>
            <div className="alert-messages">
                {message ? <AlertMessage severity={AlertSeverity.error} message={message}/> : null}
            </div>
            <div className="recipe-item">
                {
                    recipes.length > 0 ?
                        recipes.map((item, index) => <Recipe key={index} data={item.recipe}/>) : null
                }
            </div>
        </>
    )
}

function Home() {
    const [ searchTerm, setSearchTerm ] = useState([])

    return (
        <div>
            <HeaderView/>
            <div className={'search-field-container'}>
                <SearchFilter onSearchSubmit={term => setSearchTerm(term)}/>
            </div>
            <div>
                <Recipes searchTerm={searchTerm}></Recipes>
            </div>

        </div>
    );
}

export default Home;
