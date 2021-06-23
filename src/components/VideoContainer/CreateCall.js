import React from 'react';
import PropTypes from 'prop-types';
import { Typography, TextField, Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { NotificationsManager } from 'react-notifications';
import NotificationManager from 'react-notifications/lib/NotificationManager';

const useStyles = makeStyles({
    title: {
        marginTop: '15px',
        fontWeight: '500',
    },
    button: {
        left:  '50%',
        transform: 'translateX(-50%)'
    }
});

function CreateCall(props) {
    const classes = useStyles();
    const { handleSubmit } = props;

    const [username, setUsername] = React.useState('');
    const [meetingName, setMeetingName] = React.useState('');
    const [meetingCode, setMeetingCode] = React.useState('');

    const handleMeetingNameChange = (event) => {
        setMeetingName(event.target.value);
    }
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }
    const handleMeetingCodeChange = (event) => {
        setMeetingCode(event.target.value);
    }
    const handleButtonPressed = () => {
        handleSubmit();
        NotificationManager.success('Call Created Successfully.');
    }

    return(
        <Grid container justify='center' spacing={3}>
            <Grid 
                item 
                xl={12} 
                lg={12} 
                md={12} 
                sm={12} 
                xs={12} 
                align='center'
            >
                <Typography variant='h3' className={classes.title}>Create Meeting</Typography>
            </Grid>
            <Grid item xl={4} lg={5} md={5} sm={10} xs={10}>
                <TextField 
                    variant='outlined' 
                    autoFocus 
                    label='Meeting Name' 
                    onChange={handleMeetingNameChange} 
                    fullWidth 
                />
            </Grid>
            <Grid item xl={4} lg={5} md={5} sm={10} xs={10}>
                <TextField 
                    variant='outlined' 
                    label='Username' 
                    onChange={handleUsernameChange} 
                    fullWidth 
                />
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} />
            <Grid item xl={8} lg={10} md={10} sm={10} xs={10}>
                <TextField 
                    variant='outlined' 
                    label='Meeting Code (optional)' 
                    onChange={handleMeetingCodeChange} 
                    fullWidth
                />
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Button variant='contained' onClick={handleButtonPressed} color='primary' className={classes.button}>
                    Create
                </Button>
            </Grid>
        </Grid>
    );
}

export default CreateCall;
CreateCall.propTypes = {
    handleSubmit: PropTypes.func
}