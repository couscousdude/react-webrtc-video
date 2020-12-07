import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
    list: {
        width: 250
    },
});

function NavDrawer(props) {
    const classes = useStyles();
    const { open, items, handleClose } = props;

    return (
        <Drawer open={open} onClose={handleClose}>    
            <List className={classes.list}>
                { items.map(item => (
                    <ListItem button>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text}/>
                    </ListItem>
                )) }
                <Divider />
            </List>
        </Drawer>
    )
}

export default NavDrawer;

NavDrawer.propTypes = {
    open: PropTypes.bool,
    items: PropTypes.array,
    handleClose: PropTypes.func
}