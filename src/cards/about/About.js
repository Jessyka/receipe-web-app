import React from 'react';
import {HeaderView} from '../../components/header/HeaderView'
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import './About.css'

function About() {
    return (
        <div>
            <HeaderView/>
            <div className={'about-content'} data-testid={'about-content'}>
                <Grid container spacing={2}>
                    <Grid item xs>
                        <Typography variant="body2" gutterBottom>
                            React web app de consulta de receitas. Desenvolvido aplicando conceitos estudados no curso React and Hooks.
                            Testes unitários com <a href={'https://testing-library.com/docs/react-testing-library/intro'}>React Testing Library.</a>
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default About;
