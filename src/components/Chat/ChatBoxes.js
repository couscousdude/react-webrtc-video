import { Grid, Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';

const ChatBoxes = () => {
    return (
        <Grid 
            container
            spacing={2}
        >
            <Grid item container justify='flex-end'>
                <Card>
                    <CardContent>
                        <Typography variant="body1">
                            Test message
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item container justify='flex-start'>
                <Card>
                    <CardContent>
                        <Typography variant="body1">
                            Test message2
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item container justify='flex-end'>
                <Card>
                    <CardContent>
                        <Typography variant="body1">
                            Test message3
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}

export default ChatBoxes;