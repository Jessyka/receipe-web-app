import {useState, useEffect} from 'react';
import {API_URL} from '../../../config';
import AlertSeverity from "../../../components/alertMessage/AlertSeverity";

export const useRecipes = searchData => {
    const messageDefault = {
        message: '',
        showMessage: false,
        severity: AlertSeverity.error
    };

    const [ recipes, setRecipes ] = useState([]);
    const [ alertMessage, setAlertMessage ] = useState(messageDefault);

    const addAlert = (message, severity = AlertSeverity.error) =>
    {
        setAlertMessage({
            message,
            showMessage: true,
            severity
        });
        setRecipes([]);
    }

    const setRecipesAndCleanMessage = data => {
        setRecipes(data);
        setAlertMessage(messageDefault);
    }

    const addRecipes = data => {
        if(data.length){
            setRecipesAndCleanMessage(data);
            return;
        }

        addAlert('Nenhum item encontrado.', AlertSeverity.info);
    }

    const fetchAPIData = (searchData, callBackError) => {
        fetch(API_URL(searchData))
            .then(response =>  response.json().then(data => addRecipes(data.hits)))
            .catch(() => callBackError('Error ao carregar receitas.'));
    }

    useEffect( () => {
        if (searchData.length) {
            fetchAPIData(searchData, addAlert);
        }}, [searchData]);

    return { recipes, alertMessage };
}
