import React from 'react';
import VideoChatContainer from './VideoContainer/VideoContainer';
import { Route, useRouteMatch, Switch } from 'react-router-dom';
import CreateCall from './VideoContainer/CreateCall';
import JoinCall from './VideoContainer/JoinCall';

function Chat(props) {
    let match = useRouteMatch();

    return (
        <Switch>
            <Route exact path={match.path}>
                <VideoChatContainer />
            </Route>
            <Route path={`${match.path}/create`}>
                <CreateCall />
            </Route>
            <Route path={`${match.path}/join`}>
                <JoinCall />
            </Route>
        </Switch>
    )
}

export default Chat;