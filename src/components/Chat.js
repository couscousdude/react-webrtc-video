import React from 'react';
import { Route, useRouteMatch, Switch } from 'react-router-dom';
import CreateCall from './VideoContainer/CreateCall';
import JoinCall from './VideoContainer/JoinCall';
import HandleConnection from './VideoContainer/connection/HandleConnection';
import VideoChat from './VideoContainer/VideoHomepage';
const config = require('./VideoContainer/connection/config.json');

const connectionHandler = new HandleConnection(config);

function Chat(props) {
    let match = useRouteMatch();

    const handleOpenUserMedia = () => {
        connectionHandler.openUserMedia('#localVideo', '#remoteVideo');
    }
    
    const handleCreateCall = async () => {
        await connectionHandler.createCall();
    }

    const handleJoinCall = async roomId => {
        await connectionHandler.joinCallById(roomId);
    }

    return (
        <Switch>
            <Route exact path={match.path}>
                <VideoChat 
                    isLoggedIn={true}
                    openUserMedia={handleOpenUserMedia}
                />
            </Route>
            <Route path={`${match.path}/create`}>
                <CreateCall 
                    handleSubmit={handleCreateCall}
                />
            </Route>
            <Route path={`${match.path}/join`}>
                <JoinCall 
                    handleSubmit={handleJoinCall}
                />
            </Route>
        </Switch>
    )
}

export default Chat;