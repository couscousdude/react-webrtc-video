import React from 'react';
import { Route, useRouteMatch, Switch, useHistory } from 'react-router-dom';
import CreateCall from './VideoContainer/CreateCall';
import JoinCall from './VideoContainer/JoinCall';
import HandleConnection from './VideoContainer/connection/HandleConnection';
import VideoHomepage from './VideoContainer/VideoHomepage';
import VideoChat from './VideoContainer/VideoChat';
const config = require('./VideoContainer/connection/config.json');

const connectionHandler = new HandleConnection(config);

function Chat(props) {
    let match = useRouteMatch();
    let history = useHistory();

    const handleOpenUserMedia = () => {
        connectionHandler.openUserMedia();
    }
    
    const handleCreateCall = async () => {
        history.push('/chat/meeting');
        await connectionHandler.createCall();
    }

    const handleJoinCall = async roomId => {
        history.push('/chat/meeting');
        await connectionHandler.joinCallById(roomId);
    }

    const handleHangUp = () => {
        connectionHandler.hangUp();
    }

    return (
        <Switch>
            <Route exact path={match.path}>
                <VideoHomepage
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
            <Route path={`${match.path}/meeting`}>
                <VideoChat
                    localStream={connectionHandler.localStream}
                    remoteStream={connectionHandler.remoteStream}
                    onOpen={handleOpenUserMedia}
                    onClose={handleHangUp}
                />
            </Route>
        </Switch>
    )
}

export default Chat;