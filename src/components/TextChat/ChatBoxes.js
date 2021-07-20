import { Grid, Card, CardContent, Typography, CardHeader } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';

const ChatMessage = (props) => {
    const { messageContent, messageSender, isSelf } = props;

    return (
        <Grid item container justify={isSelf ? 'flex-end' : 'flex-start'}>
            <Card>
                <CardHeader 
                    title={messageSender}
                />
                
                <CardContent>
                    <Typography variant="body1">
                        {messageContent}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
}

const ChatBoxes = (props) => {
    const { messages } = props;

    return (
        <div style={{margin: 5}}>
            <Grid 
                container
                spacing={2}
            >
                { messages.map(
                    msg => (
                    <ChatMessage
                        messageContent={msg.msgContent}
                        messageSender={msg.sender}
                        isSelf
                    /> )
                )
                }
            </Grid>
        </div>
    );
}

export default ChatBoxes;
ChatMessage.propTypes = {
    messageContent: PropTypes.string,
    messageSender: PropTypes.string,
    isSelf: PropTypes.bool
}
ChatBoxes.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.object)
}