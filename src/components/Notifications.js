import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const Notifications = () => {
    const [open, setOpen] = React.useState(false);
    const [message, setMessage] = React.useState('');

    const sendNotif = (msg) => {
        setMessage(msg);
        setOpen(true);
        setTimeout(() => {
            setOpen(false);
        }, 3000);
    }

    return (
        <>
            <Snackbar open={open}>
                <MuiAlert severity="success">
                    {message}
                </MuiAlert>
            </Snackbar>
            <button onClick={() => {sendNotif('test')}}>test</button>
        </>
    );
}

export default Notifications;