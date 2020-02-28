import React, {useState} from 'react';
import {HeaderView} from '../../components/header/HeaderView'
import {SearchFilter} from "../../components/searchFilter/SearchFilter";
import './Home.css'
import Recipes from "./recipes/Recipes";


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
