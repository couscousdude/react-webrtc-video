import React from 'react';
import { Route, useRouteMatch, Switch, useHistory } from 'react-router-dom';
import CreateCall from './VideoContainer/CreateCall';
import JoinCall from './VideoContainer/JoinCall';
import HandleConnection from './VideoContainer/connection/HandleConnection';
import VideoHomepage from './VideoContainer/VideoHomepage';
import VideoChat from './VideoContainer/VideoChat';
const config = require('./VideoContainer/connection/config.json');

const connectionHandler = new HandleConnection(config);

const remoteVideoId = '#remoteVideo';
const localVideoId = '#localVideo';

function Chat(props) {
    let match = useRouteMatch();
    let history = useHistory();

    const handleOpenUserMedia = () => {
        connectionHandler.openUserMedia(localVideoId, remoteVideoId);
        connectionHandler.resetRemoteDisplay(remoteVideoId);
        // connectionHandler.sendTracks();
    }
    
    const handleCreateCall = async () => {
        history.push('/chat/meeting');
        await connectionHandler.createCall();
    }

    const handleJoinCall = async roomId => {
        history.push('/chat/meeting');
        await connectionHandler.joinCallById(roomId);
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
                    localVideoId={localVideoId}
                    remoteVideoId={remoteVideoId}
                    onOpen={handleOpenUserMedia}
                />
            </Route>
        </Switch>
    )
}

export default Chat;