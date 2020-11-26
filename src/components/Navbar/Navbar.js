import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        flexGrow: 1
    },
    title: {
        flexGrow: 1
    }
});

function Navbar(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position='fixed'>
                <Toolbar>
                    <Typography variant='h6' className={classes.title}>
                        React Video Chat
                    </Typography>
                    <Button color='default' variant="text">
                        Login
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar;