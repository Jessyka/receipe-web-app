import {useState, useEffect} from "react";
import {API_URL} from "../../config";


export const useRecipes = searchData => {
    const [ recipes, setRecipes ] = useState([])
    const [ message, setError ] = useState('')

    const addError = newMessage => {
        setError(newMessage);
        setRecipes([]);
    }

    const addRecipes = data => {
        setRecipes(data);
        setError('');
    }

    useEffect( () => {
        if (searchData.length > 0) {
            fetch(API_URL(searchData))
                .then(response => response.json().then(data => addRecipes(data.hits)))
                .catch(() => addError('Error ao carregar receitas.'));
        }}, [searchData]);

    return { recipes, message };
}
