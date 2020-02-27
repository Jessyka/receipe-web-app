import Grid from "@material-ui/core/Grid";
import React, {useState} from "react";
import './SearchFilter.css'
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export const SearchFilter = ({onSearchSubmit}) => {
    const [searchData, setSearchData] = useState('');

    const handleInputChange = event => {
        setSearchData(event.target.value);
    };

    const submitSearchQuery = () => {
        if (searchData.length > 0) {
            onSearchSubmit(searchData);
        }
    }

    return (
        <>
            <form className={'search-filter-form'} data-testid={'search-form'}>
                <Grid container spacing={2} alignItems={'center'}>
                    <Grid item >
                        <TextField
                            size={'medium'}
                            variant={'outlined'}
                            id={'searchField'}
                            name={'searchField'}
                            label={'Buscar Receita'}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={submitSearchQuery}>

                            Buscar
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </>
    )
}
