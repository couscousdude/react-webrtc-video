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
            <Button variant="outlined" onClick={handleClick}>
  Open success snackbar
</Button>
<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
  <Alert onClose={handleClose} severity="success">
    This is a success message!
  </Alert>
</Snackbar>
<Alert severity="error">This is an error message!</Alert>
<Alert severity="warning">This is a warning message!</Alert>
<Alert severity="info">This is an information message!</Alert>
<Alert severity="success">This is a success message!</Alert>
        </>
    );
}

export default Notifications;