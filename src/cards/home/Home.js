import React from 'react';
import {HeaderView} from '../../components/header/HeaderView'
import {API_URL} from "../../config";
import {SearchFilter} from "../../components/searchFilter/SearchFilter";
import './Home.css'

function Home() {

    const updateSearchQuery = searchData => {
        if (searchData.length > 0) {
            fetch(API_URL(searchData))
                .then(response => response.json().then(data => console.log(data)));
        }
    }

    return (
        <div>
            <HeaderView/>
            <div className={'search-field-container'}>
                <SearchFilter onSearchSubmit={updateSearchQuery}/>
            </div>
        </div>
    );
}

export default Home;
