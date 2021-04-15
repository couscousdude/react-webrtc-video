import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useLocation } from 'react-router-dom';
import { parse } from 'query-string'; 

const useStyles = makeStyles({
    title: {
        marginTop: '15px',
        fontWeight: '500',
    },
    button: {
        left: '50%',
        transform: 'translateX(-50%)'
    }
});

const JoinCall = props => {
    const { handleSubmit } = props;
    const classes = useStyles();
    const location = useLocation();

    const params = parse(location.search);

    const [username, setUsername] = React.useState('');
    const [meetingCode, setMeetingCode] = React.useState(params.code);
    // const [meetingCode, setMeetingCode] = React.useState(match.params.code)

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }
    const handleMeetingCodeChange = (event) => {
        setMeetingCode(event.target.value);
    }
    const handleButtonPressed = () => {
        handleSubmit(meetingCode)
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
                <Typography variant='h3' className={classes.title}>Join Meeting</Typography>
            </Grid>
            <Grid item xl={8} lg={8} md={8} sm={10} xs={10}>
                <TextField 
                    variant='outlined' 
                    autoFocus
                    label='Meeting Code' 
                    onChange={handleMeetingCodeChange} 
                    fullWidth
                    defaultValue={meetingCode}
                />
            </Grid>
            <Grid item xl={12} xs={12} md={12} sm={12} lg={12} />
            <Grid item xl={4} lg={4} md={4} sm={10} xs={10}>
                <TextField 
                    variant='outlined' 
                    label='Username' 
                    onChange={handleUsernameChange} 
                    fullWidth 
                />
            </Grid>
            <Grid item xl={1} lg={1} md={1} sm={12} xs={12}>
                <Button variant='contained' onClick={handleButtonPressed} color='primary' className={classes.button}>
                    Join
                </Button>
            </Grid>
            <Grid item xl={3} lg={3} md={3} xs={12} sm={12} />
        </Grid>
    );
}

export default JoinCall;
JoinCall.propTypes = {
    handleSubmit: PropTypes.func,
}