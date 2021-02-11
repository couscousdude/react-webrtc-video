import React from 'react';
import PropTypes from 'prop-types';
import { Typography, TextField, Button } from '@material-ui/core';

function CreateCall(props) {
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
        
    }

    return(
        <div>
            <Typography variant='subtitle1'>Create Meeting</Typography>
            <Textfield variant='outlined' autoFocus label='Meeting Name' onChange={handleMeetingNameChange} />
            <Textfield variant='outlined' label='Username' onChange={handleUsernameChange} />
            <TextField variant='outlined' label='Meeting Code (optional)' onChange={handleMeetingCodeChange} />
            <Button variant='filled' onClick={handleButtonPressed}>
                Create
            </Button>
        </div>
    );
}

export default CreateCall;
CreateCall.propTypes = {

}