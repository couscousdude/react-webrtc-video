import React from 'react';
import { useHistory } from 'react-router-dom';
import { Typography, Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    header: {
        textAlign: 'center',
        fontWeight: 500
    },
});

function Home(props) {
    const classes = useStyles();
    const history = useHistory();

    const handleChatRedirect = () => {
        history.push('/chat');
    }

    return(
        <div>
            <Typography variant='h1' className={classes.header}>
                React Video Chat
            </Typography>
            <Grid container justify='center' alignItems='center'>
                <Grid item>
                    <Button variant='contained' color='primary' onClick={handleChatRedirect}>
                        Go to Chat
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default Home;