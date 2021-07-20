import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Typography, Button, IconButton, Divider } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles({
    root: {
        height: '100px',
        width: '100%',
        // backgroundColor: 'grey',
        bottom: 0
    },
    textInput: {
        margin: 10
    }
});

const MessageBox = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Divider />
            <div className={classes.textInput}>
                <TextField
                    id="standard-basic" 
                    label="Type message here..."
                    
                    // className={classes.textInput}
                />
                <IconButton aria-label="send"><SendIcon /></IconButton>
            </div>
        </div>
    );
}

export default MessageBox;