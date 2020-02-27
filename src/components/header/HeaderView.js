import React from "react";
import './HeaderView.css'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

export const HeaderView = () => {
    return (<nav>
        <AppBar position='static' data-testid='header'>
            <Toolbar>
                <Button color="inherit">
                    <a href={'/'} className={'header-title'}>Receitas</a>
                </Button>
                <Button color="inherit">
                    <a href={'/sobre'} className={'header-title'}>Sobre</a>
                </Button>
            </Toolbar>
        </AppBar>
    </nav>)
}

