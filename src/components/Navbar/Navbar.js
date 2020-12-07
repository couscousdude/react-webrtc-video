import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
    root: {
        flexGrow: 1
    },
    title: {
        flex: 1,
        fontWeight: 500,
        textDecoration: 'none'
    }
});

function Navbar(props) {
    const { handleMenuClick } = props;

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position='fixed'>
                <Toolbar>
                    <IconButton
                        onClick={handleMenuClick}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography 
                        variant='h6' 
                        className={classes.title}
                        noWrap
                        align='center'
                        component={Link}
                        to='/'
                        color='inherit'
                    >
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
Navbar.propTypes = {
    handleMenuClick: PropTypes.func
}