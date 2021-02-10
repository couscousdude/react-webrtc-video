import React from 'react';
import { TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import firebaseConfig from '../../public/firebaseConfig';

function JoinCall(props) {
    const { open, handleClose } = props;

    const [username, setUsername] = React.useState('');
    const [joinCode, setJoinCode] = React.useState('');

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    } else {
        firebase.app();
    }

    const db = firebase.firestore();

    const joinMeeting = async () => {
        try {
            const roomRef = await db.collection('rooms').doc(joinCode);
            await roomRef.update({
                calleeUsername: username
            });
        } catch(err) {
            console.log(`An error occurred: ${err}`);
        } finally {
            handleClose();
        }
    }

    const handleUsernameInput = e => {
        setUsername(e.target.value);
    }

    const handleJoinCodeInput = e => {
        setJoinCode(e.target.value);
    }

    

    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle>Create Call</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin='dense'
                    id='name'
                    label='Username'
                    type='text'
                    fullWidth
                    onChange={handleUsernameInput}
                />
                <TextField
                    margin= 'dense'
                    id='title'
                    label='Join Code'
                    onChange={handleJoinCodeInput}
                    type='text'
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>
                    Cancel
                </Button>
                <Button onClick={joinMeeting}>
                    Join Meeting
                </Button>
            </DialogActions>
        </Dialog>
    )
}
export default JoinCall;
JoinCall.propTypes = {
    open: PropTypes.bool,
    handleClose: PropTypes.func
}