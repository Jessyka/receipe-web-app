import React from "react";
import './HeaderView.css'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

export const HeaderView = () => {
    return (<nav>
        <AppBar position="static">
            <Toolbar>
                <Button color="inherit" className={'header-title'}>Receitas</Button>
                <Button color="inherit">Sobre</Button>
            </Toolbar>
        </AppBar>
    </nav>)
}

